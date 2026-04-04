const mongoose = require('mongoose');

const statusHistorySchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Review', 'Done'],
        required: true
    },
    changedAt: {
        type: Date,
        default: Date.now
    }
}, { _id: false });

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker'
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Review', 'Done'],
        default: 'To Do'
    },
    statusHistory: [statusHistorySchema],
    issueType: {
        type: String,
        enum: ['Task', 'Bug', 'Story', 'Epic'],
        default: 'Task'
    },
    storyPoints: {
        type: Number,
        default: 0
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    labels: [{
        type: String,
        trim: true
    }],
    reporter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker'
    },
    subdomain: {
        type: String
    },
    checklist: [{
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        completedAt: {
            type: Date
        }
    }]
}, { timestamps: true });

// Middleware to record status history
ticketSchema.pre('save', function (next) {
    if (this.isModified('status')) {
        this.statusHistory.push({
            status: this.status,
            changedAt: new Date()
        });
    }

    // If it's a new document and status is not yet in history
    if (this.isNew && (!this.statusHistory || this.statusHistory.length === 0)) {
        this.statusHistory = [{
            status: this.status || 'To Do',
            changedAt: new Date()
        }];
    }

    next();
});

module.exports = mongoose.model('Ticket', ticketSchema);
