const { calculateWorkerProductivity } = require('./utils/productivityCalculator');

// Test to understand the per-minute salary calculation discrepancy
function testPerMinuteCalculation() {
  console.log('Analyzing per-minute salary calculation discrepancy...');
  console.log('PDF shows: Per Minute Salary = ₹1.0802');
  console.log('');
  
  // From the PDF, I can see the daily salary calculation:
  // December 5th: Total Salary = ₹226.60 after 30-min deduction of ₹32.66
  // So base daily salary = ₹226.60 + ₹32.66 = ₹259.26
  // December 10th: Total Salary = ₹259.26 (no deduction)
  // This confirms daily salary is ₹259.26
  
  // If daily salary is ₹259.26 and assuming 8 hours work day = 480 minutes
  // Per minute = ₹259.26 / 480 = ₹0.5401 per minute
  // But PDF shows ₹1.0802, which is exactly double
  
  // Maybe it's calculated as ₹259.26 / 240 minutes (4 hours effective work time after lunch)
  // ₹259.26 / 240 = ₹1.0802 per minute - MATCHES THE PDF!
  
  const worker = {
    _id: 'santhosh-worker-id',
    name: 'Santhosh S',
    username: 'santhosh_xz8527',
    rfid: 'XZ8527',
    salary: 7000, // Monthly salary
    batch: 'Full Time'
  };
  
  // Test with the actual working time pattern from the PDF
  const attendanceData = [
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
      time: '07:07:39 PM', // 7:07 PM
      presence: false,
      worker: 'santhosh-worker-id',
      subdomain: 'test'
    }
  ];
  
  // Define the batch with lunch break (which reduces effective working time)
  const batches = [
    {
      batchName: 'Full Time',
      from: '15:00', // 3:00 PM
      to: '19:00',   // 7:00 PM  
      lunchFrom: '12:00', // 12:00 PM
      lunchTo: '13:00'    // 1:00 PM
    }
  ];
  
  const options = {
    batches,
    holidays: [],
    deductSalary: true,
    permissionTimeMinutes: 15,
    isLunchConsider: false, // This means lunch break is NOT counted as working time
    intervals: []
  };
  
  const result = calculateWorkerProductivity({
    worker,
    attendanceData,
    fromDate: '2024-12-09',
    toDate: '2024-12-09',
    options
  });
  
  console.log('=== CALCULATION DETAILS ===');
  console.log('Daily Breakdown:');
  result.dailyBreakdown.forEach(day => {
    console.log(`Date: ${day.date}`);
    console.log(`Working Minutes: ${day.workingMinutes}`);
    console.log(`Working Hours: ${day.workingHours}`);
    console.log(`Permission Minutes: ${day.permissionMinutes}`);
    console.log(`Issues:`, day.issues);
  });
  
  console.log('\n=== SUMMARY ===');
  console.log('Original Monthly Salary:', result.summary.worker.salary);
  console.log('Total Working Days in Period:', result.summary.totalWorkingDaysInPeriod);
  console.log('Per Day Salary:', result.summary.perDaySalary);
  console.log('Standard Working Minutes Per Day:', result.configuration.standardWorkingMinutesPerDay);
  console.log('Per Minute Salary:', result.summary.perMinuteSalary);
  
  console.log('\n=== REPORT ENTRY ===');
  result.report.forEach(entry => {
    console.log(`Date: ${entry.date}`);
    console.log(`Status: ${entry.status}`);
    console.log(`In Time: ${entry.inTime}`);
    console.log(`Out Time: ${entry.outTime}`);
    console.log(`Delay Time: ${entry.delayTime}`);
    console.log(`Delay Type: ${entry.delayType}`);
    console.log(`Deduction Amount: ${entry.deductionAmount}`);
    console.log(`Total Salary: ${entry.totalSalary}`);
  });
  
  console.log('\n=== ANALYSIS ===');
  const expectedPerMinute = 1.0802; // From PDF
  const calculatedPerMinute = result.summary.perMinuteSalary;
  const delayMins = parseInt(result.report[0].delayTime);
  const expectedDeduction = delayMins * expectedPerMinute;
  const actualDeduction = parseFloat(result.report[0].deductionAmount.replace('₹', ''));
  
  console.log(`Expected per-minute salary: ₹${expectedPerMinute}`);
  console.log(`Calculated per-minute salary: ₹${calculatedPerMinute.toFixed(4)}`);
  console.log(`Delay minutes: ${delayMins}`);
  console.log(`Expected deduction (30 × 1.0802): ₹${expectedDeduction.toFixed(2)}`);
  console.log(`Actual deduction: ₹${actualDeduction.toFixed(2)}`);
  
  // Check if the issue is with the per-minute calculation
  if (Math.abs(calculatedPerMinute - expectedPerMinute) > 0.01) {
    console.log('\n⚠️  Per-minute salary calculation differs from PDF');
    console.log('This could explain why deductions appear different');
  }
  
  // Check if delay is being detected
  const delayDetected = delayMins > 0;
  const deductionApplied = actualDeduction > 0;
  
  if (delayDetected && deductionApplied) {
    console.log('\n✅ Delay is being detected and deducted in current code');
    console.log('The issue might be that the PDF-generating system is running older code');
  } else {
    console.log('\n❌ Delay is not being detected or deducted');
  }
}

testPerMinuteCalculation();