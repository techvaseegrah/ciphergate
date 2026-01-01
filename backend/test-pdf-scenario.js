const { calculateWorkerProductivity } = require('./utils/productivityCalculator');

// Test the exact scenario from the PDF report
function testPDFScenario() {
  console.log('Testing scenario from PDF report for Santhosh S (XZ8527)');
  console.log('Per Minute Salary: ₹1.0802 (from PDF summary)');
  console.log('Expected deduction for 30 mins late: 30 × ₹1.0802 = ₹32.41');
  console.log('');
  
  // Mock worker data based on PDF
  const worker = {
    _id: 'santhosh-worker-id',
    name: 'Santhosh S',
    username: 'santhosh_xz8527',
    rfid: 'XZ8527',
    salary: 7000, // Monthly salary (as per PDF)
    batch: 'Full Time'
  };
  
  // Test December 5th (which correctly shows delay in PDF)
  console.log('=== TESTING DECEMBER 5TH (CORRECT BEHAVIOR FROM PDF) ===');
  const dec5Attendance = [
    {
      _id: 'attendance-dec5-in',
      name: 'Santhosh S',
      username: 'santhosh_xz8527',
      rfid: 'XZ8527',
      date: '2024-12-05',
      time: '03:30:00 PM', // 3:30 PM - 30 minutes late
      presence: true,
      worker: 'santhosh-worker-id',
      subdomain: 'test'
    },
    {
      _id: 'attendance-dec5-out',
      name: 'Santhosh S',
      username: 'santhosh_xz8527',
      rfid: 'XZ8527',
      date: '2024-12-05',
      time: '07:04:52 PM', // 7:04 PM
      presence: false,
      worker: 'santhosh-worker-id',
      subdomain: 'test'
    }
  ];
  
  const batches = [
    {
      batchName: 'Full Time',
      from: '15:00', // 3:00 PM
      to: '19:00',   // 7:00 PM
      lunchFrom: '12:00',
      lunchTo: '13:00'
    }
  ];
  
  const options = {
    batches,
    holidays: [],
    deductSalary: true,
    permissionTimeMinutes: 15,
    isLunchConsider: false,
    intervals: []
  };
  
  const dec5Result = calculateWorkerProductivity({
    worker,
    attendanceData: dec5Attendance,
    fromDate: '2024-12-05',
    toDate: '2024-12-05',
    options
  });
  
  console.log('December 5th Results:');
  dec5Result.report.forEach(entry => {
    console.log(`Date: ${entry.date}`);
    console.log(`Status: ${entry.status}`);
    console.log(`In Time: ${entry.inTime}`);
    console.log(`Out Time: ${entry.outTime}`);
    console.log(`Delay Time: ${entry.delayTime}`);
    console.log(`Deduction Amount: ${entry.deductionAmount}`);
    console.log(`Total Salary: ${entry.totalSalary}`);
    console.log('Per Minute Salary: ' + dec5Result.summary.perMinuteSalary.toFixed(4));
    console.log('---');
  });
  
  // Test December 9th (which incorrectly shows no delay in PDF)
  console.log('\n=== TESTING DECEMBER 9TH (INCORRECT BEHAVIOR FROM PDF) ===');
  const dec9Attendance = [
    {
      _id: 'attendance-dec9-in',
      name: 'Santhosh S',
      username: 'santhosh_xz8527',
      rfid: 'XZ8527',
      date: '2024-12-09',
      time: '03:30:00 PM', // 3:30 PM - 30 minutes late
      presence: true,
      worker: 'santhosh-worker-id',
      subdomain: 'test'
    },
    {
      _id: 'attendance-dec9-out',
      name: 'Santhosh S',
      username: 'santhosh_xz8527',
      rfid: 'XZ8527',
      date: '2024-12-09',
      time: '07:07:39 PM', // 7:07 PM - as in PDF
      presence: false,
      worker: 'santhosh-worker-id',
      subdomain: 'test'
    }
  ];
  
  const dec9Result = calculateWorkerProductivity({
    worker,
    attendanceData: dec9Attendance,
    fromDate: '2024-12-09',
    toDate: '2024-12-09',
    options
  });
  
  console.log('December 9th Results:');
  dec9Result.report.forEach(entry => {
    console.log(`Date: ${entry.date}`);
    console.log(`Status: ${entry.status}`);
    console.log(`In Time: ${entry.inTime}`);
    console.log(`Out Time: ${entry.outTime}`);
    console.log(`Delay Time: ${entry.delayTime}`);
    console.log(`Deduction Amount: ${entry.deductionAmount}`);
    console.log(`Total Salary: ${entry.totalSalary}`);
    console.log('Per Minute Salary: ' + dec9Result.summary.perMinuteSalary.toFixed(4));
    console.log('---');
  });
  
  console.log('\n=== ANALYSIS ===');
  const dec5Entry = dec5Result.report[0];
  const dec9Entry = dec9Result.report[0];
  
  console.log('December 5th (should show delay):');
  console.log(`- Delay: ${dec5Entry.delayTime}`);
  console.log(`- Deduction: ${dec5Entry.deductionAmount}`);
  
  console.log('\nDecember 9th (should also show delay but doesn\'t in PDF):');
  console.log(`- Delay: ${dec9Entry.delayTime}`);
  console.log(`- Deduction: ${dec9Entry.deductionAmount}`);
  
  // Check if both show proper delay calculation
  const dec5DelayMins = parseInt(dec5Entry.delayTime);
  const dec9DelayMins = parseInt(dec9Entry.delayTime);
  
  console.log('\nExpected based on PDF per-minute salary (₹1.0802):');
  console.log(`- 30 mins × ₹1.0802 = ₹32.41 deduction`);
  
  if (dec5DelayMins > 0 && dec9DelayMins > 0) {
    console.log('\n✅ Both dates correctly show delay - fixes are working!');
  } else if (dec5DelayMins > 0 && dec9DelayMins === 0) {
    console.log('\n⚠️  December 5th shows delay but December 9th doesn\'t - there might be a specific condition');
    console.log('   This could be due to different out-time (7:04 PM vs 7:07 PM) or other factors');
  } else {
    console.log('\n❌ Neither date shows proper delay calculation');
  }
}

// Run the test
testPDFScenario();