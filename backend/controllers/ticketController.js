const Ticket = require('../models/ticketModel');
const { getIO } = require('../utils/socket');

const parseChecklist = (description, existingChecklist = []) => {
    if (!description) return [];

    const lines = description.split('\n');
    const checklist = [];

    lines.forEach((line, index) => {
        const trimmed = line.trim();
        // Match checkbox [ ] or [x] OR bullets (•, -, *) OR numbered lists (1. , 2. )
        // Priority to [ ] or [x]
        const checkboxMatch = trimmed.match(/^\[([ x])\]\s+(.+)$/i);
        const bulletMatch = trimmed.match(/^([•\-\*]|\d+\.)\s+(.+)$/);

        if (checkboxMatch) {
            const isCompleted = checkboxMatch[1].toLowerCase() === 'x';
            const text = checkboxMatch[2].trim();
            checklist.push({
                text,
                completed: isCompleted,
                completedAt: isCompleted ? new Date() : null
            });
        } else if (bulletMatch) {
            const text = bulletMatch[2].trim();
            const existing = existingChecklist.find(item => item.text === text);
            checklist.push({
                text,
                completed: existing ? existing.completed : false,
                completedAt: existing ? existing.completedAt : null
            });
        }
    });

    return checklist;
};


// @desc    Get all tickets
// @route   GET /api/tickets
// @access  Private/Admin
exports.getTickets = async (req, res) => {
    try {
        const subdomain = req.user?.subdomain || req.query.subdomain;
        let query = {};
        if (subdomain) {
            query.subdomain = subdomain;
        }

        // Add optional assignee filter
        if (req.query.assignee) {
            query.$or = [
                { assignee: req.query.assignee },
                { assignees: { $in: [req.query.assignee] } }
            ];
        }

        const tickets = await Ticket.find(query)
            .populate('assignee', 'name username status')
            .populate('assignees', 'name username department status')
            .sort({ createdAt: -1 });

        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: 'Server error retrieving tickets', error: error.message });
    }
};

// @desc    Create a new ticket
// @route   POST /api/tickets
// @access  Private/Admin
exports.createTicket = async (req, res) => {
    try {
        const { title, description, assignee, assignees, team, priority, status, issueType, storyPoints, labels, startDate, endDate, checklist } = req.body;
        const subdomain = req.user?.subdomain || req.body.subdomain;
        const reporter = req.user?._id;

        const newTicket = new Ticket({
            title,
            description,
            assignee: assignee || undefined,
            assignees: assignees || [],
            team: team || undefined,
            priority,
            status,
            issueType,
            storyPoints: storyPoints ? Number(storyPoints) : 0,
            labels: labels || [],
            reporter,
            subdomain,
            startDate,
            endDate,
            checklist: checklist || parseChecklist(description)
        });

        const savedTicket = await newTicket.save();

        // Populate assignees before returning
        await savedTicket.populate([
            { path: 'assignee', select: 'name username status' },
            { path: 'assignees', select: 'name username department status' }
        ]);

        // Socket emission
        const io = getIO();
        io.to(subdomain).emit('ticket:created', savedTicket);

        res.status(201).json(savedTicket);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ticket data', error: error.message });
    }
};

// @desc    Update a ticket
// @route   PUT /api/tickets/:id
// @access  Private/Admin
exports.updateTicket = async (req, res) => {
    try {
        const ticketId = req.params.id;
        const { title, description, assignee, assignees, team, priority, status, issueType, storyPoints, labels, startDate, endDate, checklist, feedback } = req.body;

        const ticket = await Ticket.findById(ticketId);

        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        // Verify subdomain access
        const subdomain = req.user?.subdomain;
        if (subdomain && ticket.subdomain && ticket.subdomain !== subdomain) {
            return res.status(403).json({ message: 'Not authorized to access this ticket' });
        }

        if (title !== undefined) ticket.title = title;
        if (description !== undefined) ticket.description = description;
        if (assignee !== undefined) ticket.assignee = assignee;
        if (assignees !== undefined) ticket.assignees = assignees;
        if (team !== undefined) ticket.team = team;
        if (priority !== undefined) ticket.priority = priority;
        
        // Status Update Logic with Validation
        if (status !== undefined) {
            if (status === 'Done' && req.user.role !== 'admin') {
                return res.status(403).json({ message: 'Non-admin users cannot mark tasks as Done. Move to Review instead.' });
            }
            ticket.status = status;
        }

        if (issueType !== undefined) ticket.issueType = issueType;
        if (storyPoints !== undefined) ticket.storyPoints = storyPoints;
        if (labels !== undefined) ticket.labels = labels;
        if (startDate !== undefined) ticket.startDate = startDate;
        if (endDate !== undefined) ticket.endDate = endDate;
        if (feedback !== undefined) ticket.feedback = feedback;

        // Ensure checklist is updated if provided
        if (checklist !== undefined) {
            ticket.checklist = checklist;
        } else if (description !== undefined) {
            // Otherwise, if description is updated, re-parse it
            ticket.checklist = parseChecklist(description, ticket.checklist);
        }

        // Auto move to Review (not Done) if all checklist items are completed
        if (ticket.checklist && ticket.checklist.length > 0 && ticket.checklist.every(item => item.completed)) {
            if (ticket.status !== 'Done' && ticket.status !== 'Review') {
                ticket.status = 'Review';
            }
        }

        const updatedTicket = await ticket.save();
        await updatedTicket.populate([
            { path: 'assignee', select: 'name username status' },
            { path: 'assignees', select: 'name username department status' }
        ]);

        // Socket emission
        const io = getIO();
        io.to(updatedTicket.subdomain || subdomain).emit('ticket:updated', updatedTicket);

        res.status(200).json(updatedTicket);
    } catch (error) {
        res.status(400).json({ message: 'Error updating ticket', error: error.message });
    }
};

// @desc    Delete a ticket
// @route   DELETE /api/tickets/:id
// @access  Private/Admin
exports.deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        // Verify subdomain access
        const subdomain = req.user?.subdomain;
        if (subdomain && ticket.subdomain && ticket.subdomain !== subdomain) {
            return res.status(403).json({ message: 'Not authorized to access this ticket' });
        }

        const subdomainForSocket = ticket.subdomain;
        await ticket.deleteOne();

        // Socket emission
        const io = getIO();
        io.to(subdomainForSocket).emit('ticket:deleted', { id: req.params.id });

        res.status(200).json({ id: req.params.id, message: 'Ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting ticket', error: error.message });
    }
};
