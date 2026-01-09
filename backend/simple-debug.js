// Simple test to check if delay calculation is working
const { timeToMinutes } = require('./utils/productivityCalculator');

// Test time conversion
console.log('Time conversions:');
console.log('3:00 PM (work start):', timeToMinutes('15:00')); // 3:00 PM = 15:00 in 24-hour format
console.log('3:30 PM (in time):', timeToMinutes('03:30 PM'));
console.log('7:00 PM (work end):', timeToMinutes('19:00'));   // 7:00 PM = 19:00 in 24-hour format
console.log('7:07 PM (out time):', timeToMinutes('07:07 PM'));

// Calculate expected delay
const workStart = timeToMinutes('15:00'); // 3:00 PM
const inTime = timeToMinutes('03:30 PM'); // 3:30 PM
const delay = inTime - workStart;
console.log('\nExpected delay:', delay, 'minutes');