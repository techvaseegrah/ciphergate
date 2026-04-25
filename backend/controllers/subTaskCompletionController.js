const SubTaskCompletion = require('../models/SubTaskCompletion');
const Ticket = require('../models/ticketModel');
const { getIO } = require('../utils/socket');
const path = require('path');
const fs = require('fs');

// @desc    Upsert sub-task completion with proof
// @route   POST /api/tickets/completions/upload
// @access  Private/Worker
exports.upsertCompletion = async (req, res) => {
    try {
        const { ticketId, subTaskId } = req.body;
        const workerId = req.user._id;
        const subdomain = req.user.subdomain;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'Proof files are mandatory' });
        }

        const ticket = await Ticket.findById(ticketId);
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        // Check if worker is assigned to this ticket
        const isAssigned = ticket.assignees.some(id => id.toString() === workerId.toString()) || 
                          (ticket.assignee && ticket.assignee.toString() === workerId.toString());
        
        if (!isAssigned) {
            return res.status(403).json({ message: 'You are not assigned to this task' });
        }

        const proofFiles = req.files.map(file => ({
            url: `/uploads/${file.filename}`,
            name: file.originalname,
            type: file.mimetype,
            size: file.size,
            uploadedAt: new Date()
        }));

        let completion = await SubTaskCompletion.findOne({ ticketId, subTaskId, workerId });

        if (completion) {
            // Append new files
            completion.proofFiles.push(...proofFiles);
            completion.isCompleted = true;
            completion.status = 'Submitted'; // Reset to submitted on new upload
            completion.completedAt = new Date();
            await completion.save();
        } else {
            completion = await SubTaskCompletion.create({
                ticketId,
                subTaskId,
                workerId,
                isCompleted: true,
                status: 'Submitted',
                proofFiles,
                completedAt: new Date(),
                subdomain
            });
        }

        // Emit socket update for the ticket completions
        const io = getIO();
        io.to(subdomain).emit('subtask:completion_updated', {
            ticketId,
            subTaskId,
            workerId,
            completion
        });

        // Check if all assigned employees have completed all sub-tasks
        const allCompletions = await SubTaskCompletion.find({ ticketId, isCompleted: true });
        const checklistCount = ticket.checklist.length;
        const totalAssigneesCount = (ticket.assignees?.length || (ticket.assignee ? 1 : 0));
        const requiredCompletionsCount = checklistCount * totalAssigneesCount;

        if (allCompletions.length >= requiredCompletionsCount && requiredCompletionsCount > 0) {
            if (ticket.status !== 'Done' && ticket.status !== 'Review') {
                ticket.status = 'Review';
                await ticket.save();
                io.to(subdomain).emit('ticket:updated', ticket);
            }
        }

        res.status(200).json({
            success: true,
            message: 'Proof uploaded successfully',
            fileUrl: proofFiles[proofFiles.length - 1].url,
            completion
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error saving completion', error: error.message });
    }
};

// @desc    Get completions for a ticket
// @route   GET /api/tickets/:ticketId/completions
// @access  Private
exports.getTicketCompletions = async (req, res) => {
    try {
        const { ticketId } = req.params;
        const completions = await SubTaskCompletion.find({ ticketId })
            .populate('workerId', 'name username department');
        
        res.status(200).json(completions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching completions', error: error.message });
    }
};

// @desc    Delete a proof file
// @route   DELETE /api/tickets/completions/:completionId/proof/:fileId
// @access  Private/Worker
exports.deleteProofFile = async (req, res) => {
    try {
        const { completionId, fileId } = req.params;
        const completion = await SubTaskCompletion.findById(completionId);

        if (!completion) {
            return res.status(404).json({ message: 'Completion record not found' });
        }

        if (completion.workerId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this file' });
        }

        const fileIndex = completion.proofFiles.findIndex(f => f._id.toString() === fileId);
        if (fileIndex === -1) {
            return res.status(404).json({ message: 'File not found' });
        }

        const file = completion.proofFiles[fileIndex];
        // Delete from filesystem
        const filePath = path.join(__dirname, '..', file.url);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        completion.proofFiles.splice(fileIndex, 1);
        
        // If no files left, maybe mark as not completed? 
        // User says mandatory proof for completion.
        if (completion.proofFiles.length === 0) {
            completion.isCompleted = false;
            completion.completedAt = null;
        }

        await completion.save();
        
        const io = getIO();
        io.to(completion.subdomain).emit('subtask:completion_updated', {
            ticketId: completion.ticketId,
            subTaskId: completion.subTaskId,
            workerId: completion.workerId,
            completion
        });

        res.status(200).json(completion);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting file', error: error.message });
    }
};

// @desc    Review sub-task completion (Approve/Reject)
// @route   PUT /api/tickets/completions/:completionId/review
// @access  Private/Admin
exports.reviewCompletion = async (req, res) => {
    try {
        const { completionId } = req.params;
        const { status } = req.body; // 'Approved' or 'Rejected'

        if (!['Approved', 'Rejected'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status. Must be Approved or Rejected.' });
        }

        const completion = await SubTaskCompletion.findById(completionId);
        if (!completion) {
            return res.status(404).json({ message: 'Completion record not found' });
        }

        completion.status = status;
        if (status === 'Approved') {
            completion.isCompleted = true;
        } else if (status === 'Rejected') {
            completion.isCompleted = false;
        }
        await completion.save();

        const io = getIO();
        io.to(completion.subdomain).emit('subtask:completion_updated', {
            ticketId: completion.ticketId,
            subTaskId: completion.subTaskId,
            workerId: completion.workerId,
            completion
        });

        // If rejected, move ticket back from Review to In Progress
        if (status === 'Rejected') {
            const ticket = await Ticket.findById(completion.ticketId);
            if (ticket && ticket.status === 'Review') {
                ticket.status = 'In Progress';
                await ticket.save();
                io.to(ticket.subdomain).emit('ticket:updated', ticket);
            }
        }

        res.status(200).json(completion);
    } catch (error) {
        res.status(500).json({ message: 'Error reviewing completion', error: error.message });
    }
};

