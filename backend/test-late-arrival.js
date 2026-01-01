const { calculateWorkerProductivity } = require('./utils/productivityCalculator');

// Test case for late arrival deduction
function testLateArrivalDeduction() {
  console.log('Testing late arrival deduction scenario...');
  
  // Mock worker data
  const worker = {
    _id: 'test-worker-1',
    name: 'Test Worker',
    username: 'testworker',
    rfid: '12345',
    salary: 7000, // Monthly salary
    batch: 'Full Time' // This should match the batch in the options
  };
  
  // Mock attendance data - simulating the scenario:
  // Worker shift: 3:00 PM to 7:00 PM
  // Punches in at: 3:30 PM (30 minutes late)
  // Punches out at: 7:07 PM (manually)
  const attendanceData = [
    {
      _id: 'attendance-1',
      name: 'Test Worker',
      username: 'testworker',
      rfid: '12345',
      date: '2024-12-09',
      time: '03:30:00 PM', // 3:30 PM - 30 minutes late
      presence: true, // IN punch
      worker: 'test-worker-1',
      subdomain: 'test'
    },
    {
      _id: 'attendance-2',
      name: 'Test Worker',
      username: 'testworker', 
      rfid: '12345',
      date: '2024-12-09',
      time: '07:07:39 PM', // 7:07 PM - on time or slightly overtime
      presence: false, // OUT punch
      worker: 'test-worker-1', 
      subdomain: 'test'
    }
  ];
  
  // Define batch settings - shift from 3:00 PM to 7:00 PM
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
  
  // Calculate productivity for the test period
  const result = calculateWorkerProductivity({
    worker,
    attendanceData,
    fromDate: '2024-12-09',
    toDate: '2024-12-09',
    options
  });
  
  console.log('\n=== CALCULATION RESULTS ===');
  console.log('Worker:', result.summary.worker.name);
  console.log('Daily Salary:', result.summary.perDaySalary.toFixed(2));
  console.log('Per Minute Salary:', result.summary.perMinuteSalary.toFixed(4));
  
  console.log('\n=== DAILY BREAKDOWN ===');
  result.dailyBreakdown.forEach(day => {
    console.log(`Date: ${day.date}`);
    console.log(`Punch Time: ${day.punchTime}`);
    console.log(`Working Minutes: ${day.workingMinutes}`);
    console.log(`Permission Minutes: ${day.permissionMinutes}`);
    console.log(`Salary Deduction: ${day.salaryDeduction}`);
    console.log(`Issues:`, day.issues);
    console.log('---');
  });
  
  console.log('\n=== REPORT DETAILS ===');
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
  
  // Check if late arrival was detected
  const lateArrivalDetected = result.report.some(entry => 
    entry.delayTime && entry.delayTime !== '0 mins' && entry.delayTime !== '-'
  );
  
  if (lateArrivalDetected) {
    console.log('\n✅ SUCCESS: Late arrival was detected and deducted!');
    const delayEntry = result.report.find(entry => 
      entry.delayTime && entry.delayTime !== '0 mins' && entry.delayTime !== '-'
    );
    if (delayEntry) {
      console.log(`Delay recorded: ${delayEntry.delayTime}`);
      console.log(`Deduction applied: ${delayEntry.deductionAmount}`);
    }
  } else {
    console.log('\n❌ ISSUE: Late arrival was not detected or deducted!');
    console.log('All entries show 0 mins delay or no delay recorded.');
  }
}

// Run the test
testLateArrivalDeduction();