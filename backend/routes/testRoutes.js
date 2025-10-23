// routes/testRoutes.js
const express = require('express');
const {
    submitTest,
    submitQuickTest,
    getScoreboard,
    getGlobalScoreboard,
    getIndividualScores
} = require('../controllers/testController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

// Test submission routes
router.post('/submit/:testAttemptId', protect, submitTest);
router.post('/quick-test/submit/:quickTestId', submitQuickTest); // Public route

// Scoreboard routes
router.get('/scores', protect, getScoreboard);
router.get('/global-scores', protect, adminOnly, getGlobalScoreboard);
router.get('/scores/:workerId', protect, getIndividualScores);

module.exports = router;