const Ticket = require('../models/ticketModel');

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
            query.assignee = req.query.assignee;
        }

        const tickets = await Ticket.find(query)
            .populate('assignee', 'name username')
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
        const { title, description, assignee, priority, status, issueType, storyPoints, labels } = req.body;
        const subdomain = req.user?.subdomain || req.body.subdomain;
        const reporter = req.user?._id;

        const newTicket = new Ticket({
            title,
            description,
            assignee: assignee || undefined,
            priority,
            status,
            issueType,
            storyPoints: storyPoints ? Number(storyPoints) : 0,
            labels: labels || [],
            reporter,
            subdomain
        });

        const savedTicket = await newTicket.save();

        // Populate assignee before returning
        await savedTicket.populate('assignee', 'name username');

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
        const { title, description, assignee, priority, status, issueType, storyPoints, labels } = req.body;

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
        if (priority !== undefined) ticket.priority = priority;
        if (status !== undefined) ticket.status = status;
        if (issueType !== undefined) ticket.issueType = issueType;
        if (storyPoints !== undefined) ticket.storyPoints = storyPoints;
        if (labels !== undefined) ticket.labels = labels;

        const updatedTicket = await ticket.save();
        await updatedTicket.populate('assignee', 'name username');

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

        await ticket.deleteOne();
        res.status(200).json({ id: req.params.id, message: 'Ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting ticket', error: error.message });
    }
};
