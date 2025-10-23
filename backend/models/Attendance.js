const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    username: {
        type: String,
        required: [true, 'Please add a username'],
    },
    rfid: {
        type: String,
        required: [true, 'RFID is missing'],
    },
    subdomain: {
        type: String,
        required: [true, 'Company name is missing']
    },
    departmentName: {
        type: String,
        required: [true, 'Department name is required']
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: [true, 'Please select a department']
    },
    photo: {
        type: String,
        default: ''
    },
    date: {
        type: String, // Changed from Date to String to match controller formatting
        required: [true, 'Date is required']
    },
    time: {
        type: String,
        default: () => new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }),
        required: [true, 'Time is required']
    },
    presence: {
        type: Boolean,
        required: [true, 'Presence is required'] // true for in, false for out
    },
    isMissedOutPunch: {
        type: Boolean,
        default: false
    },
    worker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker',
        required: [true, 'Worker is required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Attendance', attendanceSchema);