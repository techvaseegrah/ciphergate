// Test script to verify the fix for missed punch-out scenario
const { calculateWorkerProductivity } = require('./utils/productivityCalculator');

// Mock worker data
const worker = {
  _id: 'test-worker-id',
  name: 'Test Worker',
  salary: 30000, // Monthly salary
  batch: 'Full Time',
  subdomain: 'test-subdomain'
};

// Mock attendance data - only one IN punch at 9:28 AM, no OUT punch
const attendanceData = [
  {
    date: '2024-12-02',
    time: '09:28:00 AM',
    presence: true, // IN punch
    createdAt: new Date()
  }
];

// Mock settings for a typical work schedule: 9:00 AM to 7:00 PM with lunch from 12:30 PM to 1:30 PM
const batches = [
  {
    batchName: 'Full Time',
    from: '09:00',
    to: '19:00',
    lunchFrom: '12:30',
    lunchTo: '13:30'
  }
];

const testParams = {
  attendanceData,
  fromDate: '2024-12-02',
  toDate: '2024-12-02',
  worker,
  options: {
    batches,
    holidays: [],
    permissionTimeMinutes: 15,
    deductSalary: true,
    intervals: [],
    isLunchConsider: false
  }
};

console.log('Testing missed punch-out scenario...');
console.log('Worker punches in at 9:28 AM and forgets to punch out');
console.log('Expected: Only full working day should be deducted (approximately 540 minutes after lunch break)');
console.log('');

try {
  const result = calculateWorkerProductivity(testParams);
  
  console.log('Calculation Result:');
  console.log(`Total Working Minutes: ${result.dailyBreakdown[0]?.workingMinutes}`);
  console.log(`Total Permission Minutes (Deductions): ${result.dailyBreakdown[0]?.permissionMinutes}`);
  console.log(`Daily Salary Deduction: ${result.dailyBreakdown[0]?.salaryDeduction}`);
  console.log('');
  
  console.log('Detailed Breakdown:');
  console.log('Intervals:', result.dailyBreakdown[0]?.detailedBreakdown.intervals);
  console.log('Deductions:', result.dailyBreakdown[0]?.detailedBreakdown.deductions);
  console.log('Permission Details:', result.dailyBreakdown[0]?.detailedBreakdown.permissionDetails);
  console.log('');
  
  console.log('Report Entries:');
  console.log(result.report);
  console.log('');
  
  console.log('Summary:');
  console.log(`Final Salary: ${result.summary.finalSalary}`);
  console.log(`Per Minute Salary: ${result.summary.perMinuteSalary}`);
  console.log(`Standard Working Minutes Per Day: ${result.configuration.standardWorkingMinutesPerDay}`);

} catch (error) {
  console.error('Error during calculation:', error);
}