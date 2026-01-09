const { calculateWorkerProductivity } = require('./utils/productivityCalculator');

// Debug the pairing process for December 5th
function debugDec5Pairing() {
  console.log('=== DEBUGGING DECEMBER 5TH PAIRING ===');
  
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
  
  const result = calculateWorkerProductivity({
    worker,
    attendanceData,
    fromDate: '2024-12-05',
    toDate: '2024-12-05',
    options
  });
  
  console.log('Full Result:', JSON.stringify(result, null, 2));
}

debugDec5Pairing();