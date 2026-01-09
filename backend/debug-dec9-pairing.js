const { calculateWorkerProductivity } = require('./utils/productivityCalculator');

// Debug the pairing process for December 9th
function debugDec9Pairing() {
  console.log('=== DEBUGGING DECEMBER 9TH PAIRING ===');
  
  const worker = {
    _id: 'santhosh-worker-id',
    name: 'Santhosh S',
    username: 'santhosh_xz8527',
    rfid: 'XZ8527',
    salary: 7000,
    batch: 'Full Time'
  };
  
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
  
  const result = calculateWorkerProductivity({
    worker,
    attendanceData,
    fromDate: '2024-12-09',
    toDate: '2024-12-09',
    options
  });
  
  console.log('Full Result:', JSON.stringify(result, null, 2));
}

debugDec9Pairing();