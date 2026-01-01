const { calculateWorkerProductivity } = require('./utils/productivityCalculator');

// Test the exact scenario: worker with name "santhoshs" and RFID "XZ8527" 
// for December 9th, 2025 with the attendance pattern you specified
function testWorkerScenario() {
  console.log('Testing worker scenario for: santhoshs XZ8527 on December 9th, 2025');
  console.log('Expected: 09 December\tPresent\t03:30 PM\t07:07:39 PM\t0 mins\t₹0.00\t₹259.26');
  console.log('');
  
  // Mock worker data for "santhoshs" with RFID "XZ8527"
  const worker = {
    _id: 'santhoshs-worker-id',
    name: 'santhoshs',
    username: 'santhoshs_XZ8527',
    rfid: 'XZ8527',
    salary: 7000, // Monthly salary (as mentioned in your example)
    batch: 'Full Time' // This should match the batch in the options
  };
  
  // Mock attendance data matching your scenario:
  // Date: December 9th, 2025
  // In Time: 03:30 PM (30 minutes late for 3:00 PM shift)
  // Out Time: 07:07:39 PM
  const attendanceData = [
    {
      _id: 'attendance-dec9-in',
      name: 'santhoshs',
      username: 'santhoshs_XZ8527',
      rfid: 'XZ8527',
      date: '2025-12-09', // December 9th, 2025
      time: '03:30:00 PM', // 3:30 PM - 30 minutes late
      presence: true, // IN punch
      worker: 'santhoshs-worker-id',
      subdomain: 'test'
    },
    {
      _id: 'attendance-dec9-out',
      name: 'santhoshs',
      username: 'santhoshs_XZ8527', 
      rfid: 'XZ8527',
      date: '2025-12-09', // December 9th, 2025
      time: '07:07:39 PM', // 7:07 PM - as specified
      presence: false, // OUT punch
      worker: 'santhoshs-worker-id', 
      subdomain: 'test'
    }
  ];
  
  // Define batch settings - assuming shift from 3:00 PM to 7:00 PM as per your example
  const batches = [
    {
      batchName: 'Full Time',
      from: '15:00', // 3:00 PM
      to: '19:00',   // 7:00 PM
      lunchFrom: '12:00', // 12:00 PM
      lunchTo: '13:00'    // 1:00 PM
    }
  ];
  
  // Options for the calculator
  const options = {
    batches,
    holidays: [],
    deductSalary: true,
    permissionTimeMinutes: 15,
    isLunchConsider: false,
    intervals: []
  };
  
  // Calculate productivity for December 9th, 2025
  const result = calculateWorkerProductivity({
    worker,
    attendanceData,
    fromDate: '2025-12-09',
    toDate: '2025-12-09',
    options
  });
  
  console.log('=== WORKER DETAILS ===');
  console.log('Name:', result.summary.worker.name);
  console.log('RFID:', result.summary.worker.rfid);
  console.log('Monthly Salary:', result.summary.worker.salary);
  console.log('Daily Salary:', result.summary.perDaySalary.toFixed(2));
  console.log('Per Minute Salary:', result.summary.perMinuteSalary.toFixed(4));
  
  console.log('\n=== DAILY BREAKDOWN ===');
  result.dailyBreakdown.forEach(day => {
    console.log(`Date: ${day.date}`);
    console.log(`Punch Time: ${day.punchTime}`);
    console.log(`Working Minutes: ${day.workingMinutes}`);
    console.log(`Working Hours: ${day.workingHours.toFixed(2)}`);
    console.log(`Permission Minutes: ${day.permissionMinutes}`);
    console.log(`Salary Deduction: ${day.salaryDeduction}`);
    console.log(`Issues:`, day.issues);
    console.log('---');
  });
  
  console.log('\n=== DETAILED REPORT ===');
  result.report.forEach(entry => {
    console.log(`Date: ${entry.date}`);
    console.log(`Status: ${entry.status}`);
    console.log(`In Time: ${entry.inTime}`);
    console.log(`Out Time: ${entry.outTime}`);
    console.log(`Delay Time: ${entry.delayTime}`);
    console.log(`Delay Type: ${entry.delayType}`);
    console.log(`Deduction Amount: ${entry.deductionAmount}`);
    console.log(`Total Salary: ${entry.totalSalary}`);
    console.log('---');
  });
  
  console.log('\n=== SUMMARY ===');
  console.log('Attendance Rate:', result.summary.attendanceRate.toFixed(2) + '%');
  console.log('Total Working Days:', result.summary.totalWorkingDaysInPeriod);
  console.log('Actual Working Days:', result.summary.actualWorkingDays);
  console.log('Total Absent Days:', result.summary.totalAbsentDays);
  console.log('Absent Deduction:', result.summary.absentDeduction);
  console.log('Permission Deduction:', result.summary.permissionDeduction);
  console.log('Final Salary:', result.summary.finalSalary);
  
  // Check if the results match your expectation before the fix
  console.log('\n=== ANALYSIS ===');
  const reportEntry = result.report[0]; // Get the first (and should be only) report entry
  
  console.log('Current Results:');
  console.log(`Date: ${reportEntry.date}`);
  console.log(`Status: ${reportEntry.status}`);
  console.log(`In Time: ${reportEntry.inTime}`);
  console.log(`Out Time: ${reportEntry.outTime}`);
  console.log(`Delay Time: ${reportEntry.delayTime}`);
  console.log(`Deduction Amount: ${reportEntry.deductionAmount}`);
  console.log(`Total Salary: ${reportEntry.totalSalary}`);
  
  console.log('\nExpected Before Fix:');
  console.log('Date: 09 December');
  console.log('Status: Present');
  console.log('In Time: 03:30 PM');
  console.log('Out Time: 07:07:39 PM');
  console.log('Delay Time: 0 mins (WRONG - should be 30 mins)');
  console.log('Deduction Amount: ₹0.00 (WRONG - should be deducted for 30 mins)');
  console.log('Total Salary: ₹259.26 (full daily salary, WRONG - should be reduced)');
  
  console.log('\nExpected After Fix:');
  console.log('Date: 09 December');
  console.log('Status: Present');
  console.log('In Time: 03:30 PM');
  console.log('Out Time: 07:07:39 PM');
  console.log('Delay Time: 30 mins (CORRECT)');
  console.log('Deduction Amount: ₹875.00 (CORRECT - for 30 mins late)');
  console.log('Total Salary: ₹6125.00 (CORRECT - reduced from 7000)');
  
  // Check if the fix is working
  const delayMinutes = parseInt(reportEntry.delayTime);
  const isDelayDetected = delayMinutes > 0;
  const deductionApplied = !reportEntry.deductionAmount.includes('₹0.00');
  const salaryReduced = parseFloat(reportEntry.totalSalary.replace('₹', '').replace('.00', '')) < result.summary.perDaySalary;
  
  if (isDelayDetected && deductionApplied) {
    console.log('\n✅ SUCCESS: The fix is working correctly!');
    console.log(`- Delay detected: ${reportEntry.delayTime}`);
    console.log(`- Deduction applied: ${reportEntry.deductionAmount}`);
    console.log(`- Salary properly reduced based on attendance`);
  } else {
    console.log('\n❌ ISSUE: The fix may not be working as expected');
    console.log(`- Delay detected: ${reportEntry.delayTime}`);
    console.log(`- Deduction applied: ${reportEntry.deductionAmount}`);
  }
}

// Run the test
testWorkerScenario();