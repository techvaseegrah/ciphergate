// utils/questionProcessor.js
const mongoose = require('mongoose');
const Question = require('../models/Question');
const Worker = require('../models/Worker');
const LearningTopic = require('../models/LearningTopic');
const { generateMCQQuestions } = require('./openai');
const jobManager = require('./jobManager');
const {
    CONCURRENT_WORKERS,
    CONCURRENT_TOPICS_PER_WORKER,
    CACHE_TTL,
    ENABLE_TOPIC_CACHING
} = require('../config/performance');

const log = {
    info: (message, data = {}) => console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data),
    error: (message, error = {}) => console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error),
    warn: (message, data = {}) => console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, data)
};

async function runWithConcurrency(tasks, concurrency) {
    // Use a more efficient approach for managing concurrency
    const results = [];
    
    // Process tasks in batches according to concurrency limit
    for (let i = 0; i < tasks.length; i += concurrency) {
        const batch = tasks.slice(i, i + concurrency);
        const batchResults = await Promise.all(batch.map((task, index) => 
            task().then(result => ({ index: i + index, result }))
        ));
        
        // Place results in correct positions
        for (const { index, result } of batchResults) {
            results[index] = result;
        }
    }
    
    return results;
}

// SUPER OPTIMIZATION: Add caching for common topics
const topicCache = new Map();

const processQuestionGeneration = async (jobData, jobId) => {
    const {
        workerIds,
        numQuestions,
        difficulty,
        timeDuration,
        totalTestDuration,
        topicMode,
        topic: commonTopic,
        commonTopics,
        individualTopics
    } = jobData;

    log.info('Starting robust, concurrent question generation job:', { numWorkers: workerIds.length, jobId });

    const workers = await Worker.find({ _id: { $in: workerIds } });
    const workerMap = new Map(workers.map(w => [w._id.toString(), w]));
    
    // Clean up expired cache entries
    if (ENABLE_TOPIC_CACHING) {
        const now = Date.now();
        for (const [key, value] of topicCache.entries()) {
            if (now - value.timestamp > CACHE_TTL) {
                topicCache.delete(key);
            }
        }
    }

    let workersProcessed = 0;
    let totalQuestionsGenerated = 0;

    const tasks = workerIds.map(workerId => async () => {
        const session = await mongoose.startSession();
        let taskResult;

        try {
            await session.withTransaction(async () => {
                const worker = workerMap.get(workerId);
                if (!worker) {
                    throw new Error('Worker not found in map');
                }

                let topicsToUse = [];
                let rawTopics = [];

                if (topicMode === 'common') {
                    // For common mode, use commonTopics if available, otherwise fallback to topic
                    const commonTopicsToUse = commonTopics || (commonTopic ? [commonTopic] : []);
                    topicsToUse = commonTopicsToUse.length > 0 
                        ? commonTopicsToUse.flatMap(t => typeof t === 'string' ? t.split(',').map(t => t.trim()).filter(Boolean) : [])
                        : [];
                    rawTopics = commonTopicsToUse;
                } else {
                    rawTopics = (individualTopics && individualTopics[workerId]) || [];
                    
                    if (rawTopics.length === 0) {
                        const dbTopics = await LearningTopic.find({ worker: workerId }).select('topic').lean().session(session);
                        rawTopics = dbTopics.map(t => t.topic);
                    }
                    
                    for (const rawTopic of rawTopics) {
                        if (typeof rawTopic === 'string' && rawTopic.includes(',')) {
                            const splitTopics = rawTopic.split(',').map(t => t.trim()).filter(Boolean);
                            topicsToUse.push(...splitTopics);
                        } else if (rawTopic && typeof rawTopic === 'string') {
                            topicsToUse.push(rawTopic.trim());
                        }
                    }
                    
                    topicsToUse = [...new Set(topicsToUse)].filter(Boolean);
                }

                if (topicsToUse.length === 0) {
                    log.warn(`Skipping ${worker.name}: No topics found.`);
                    taskResult = { workerId, workerName: worker.name, success: false, reason: 'No topics' };
                    return;
                }

                const combinedTopicString = topicsToUse.join(', ');
                const targetQuestions = parseInt(numQuestions);
                const totalTopics = topicsToUse.length;
                const baseQuestionsPerTopic = Math.floor(targetQuestions / totalTopics);
                const remainingQuestions = targetQuestions % totalTopics;
                
                // Process topics in parallel for better performance
                const topicTasks = [];
                for (let i = 0; i < totalTopics; i++) {
                    const currentTopic = topicsToUse[i];
                    const questionsForThisTopic = baseQuestionsPerTopic + (i < remainingQuestions ? 1 : 0);
                    
                    if (questionsForThisTopic > 0) {
                        topicTasks.push(async () => {
                            try {
                                // SUPER OPTIMIZATION: Check cache first for common topics
                                if (ENABLE_TOPIC_CACHING && topicMode === 'common') {
                                    const cacheKey = `${currentTopic}-${difficulty}-${questionsForThisTopic}`;
                                    if (topicCache.has(cacheKey)) {
                                        const cached = topicCache.get(cacheKey);
                                        if (Date.now() - cached.timestamp < CACHE_TTL) {
                                            log.info(`Using cached questions for topic: "${currentTopic}"`);
                                            return cached.questions.slice(0, questionsForThisTopic);
                                        } else {
                                            // Remove expired cache entry
                                            topicCache.delete(cacheKey);
                                        }
                                    }
                                }
                                
                                const result = await generateMCQQuestions([currentTopic], questionsForThisTopic, difficulty);
                                const generatedQuestions = result[currentTopic] || [];
                                
                                // SUPER OPTIMIZATION: Cache results for common topics
                                if (ENABLE_TOPIC_CACHING && topicMode === 'common') {
                                    const cacheKey = `${currentTopic}-${difficulty}-${questionsForThisTopic}`;
                                    topicCache.set(cacheKey, {
                                        questions: generatedQuestions,
                                        timestamp: Date.now()
                                    });
                                }
                                
                                return generatedQuestions.slice(0, questionsForThisTopic);
                            } catch (error) {
                                log.error(`Failed to generate questions for topic "${currentTopic}":`, error.message);
                                return [];
                            }
                        });
                    }
                }

                // Execute topic generation in parallel
                const topicResults = await runWithConcurrency(topicTasks, CONCURRENT_TOPICS_PER_WORKER);
                let allQuestionsForWorker = topicResults.flat();

                allQuestionsForWorker = allQuestionsForWorker.slice(0, targetQuestions);

                if (allQuestionsForWorker.length === 0) {
                    taskResult = { workerId, workerName: worker.name, success: false, reason: 'AI failed to generate questions' };
                    return;
                }

                const questionsToSave = allQuestionsForWorker.map(q => {
                    const correctOptionIndex = q.options.findIndex(
                        (opt) => String(opt).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase()
                    );
                    return {
                        worker: worker._id,
                        topic: combinedTopicString,
                        questionText: q.questionText,
                        options: q.options,
                        correctAnswer: correctOptionIndex !== -1 ? correctOptionIndex : Math.floor(Math.random() * q.options.length),
                        difficulty: q.difficulty || difficulty,
                        timeDuration: parseInt(timeDuration),
                        totalTestDuration: parseInt(totalTestDuration)
                    };
                }).filter(Boolean);

                // SUPER OPTIMIZATION: Use bulk insert for better database performance
                if (questionsToSave.length > 0) {
                    await Question.insertMany(questionsToSave, { 
                        session,
                        ordered: false // Allow parallel insertion
                    });
                }

                taskResult = { 
                    workerId, 
                    workerName: worker.name, 
                    success: true, 
                    questionsGenerated: questionsToSave.length,
                    targetQuestions: targetQuestions,
                    topics: combinedTopicString
                };
                
                // Track total questions for progress reporting
                totalQuestionsGenerated += questionsToSave.length;
            });
        } catch (error) {
            const workerName = workerMap.get(workerId)?.name || 'Unknown';
            log.error(`Transaction failed for worker ${workerName}:`, error.message);
            taskResult = { workerId, workerName, success: false, reason: error.message };
        } finally {
            await session.endSession();
        }
        
        workersProcessed++;
        // Include total questions generated in progress update
        jobManager.updateJobProgress(jobId, Math.round((workersProcessed / workerIds.length) * 100), {
            workersProcessed,
            totalWorkers: workerIds.length,
            totalQuestionsGenerated
        });
        return taskResult;
    });

    // Execute worker tasks with higher concurrency
    const results = await runWithConcurrency(tasks, CONCURRENT_WORKERS);

    const successfulWorkers = results.filter(r => r && r.success);
    const failedWorkers = results.filter(r => r && !r.success);
    // Use the tracked total instead of recalculating
    // const totalQuestionsGenerated = successfulWorkers.reduce((sum, r) => sum + r.questionsGenerated, 0);

    const returnValue = {
        success: true,
        results: successfulWorkers,
        failedWorkers,
        totalQuestionsGenerated
    };

    jobManager.completeJob(jobId, returnValue);
    return returnValue;
};

module.exports = { processQuestionGeneration };