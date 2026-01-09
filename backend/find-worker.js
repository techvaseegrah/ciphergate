const mongoose = require('mongoose');
const Worker = require('./models/Worker');

// Connect to MongoDB (using the same config as the main server)
const connectDB = async () => {
  try {
    // Get MongoDB URI from environment or use default
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ciphergate';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected for worker lookup');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

async function findWorker() {
  await connectDB();
  
  try {
    // Search for worker by name containing "santhoshs" and username containing "XZ8527"
    console.log('Searching for worker with name containing "santhoshs" and username containing "XZ8527"');
    
    // First, let's try to find by username pattern
    let workers = await Worker.find({
      username: { $regex: /XZ8527/i }
    });
    
    if (workers.length === 0) {
      // Try with name
      workers = await Worker.find({
        name: { $regex: /santhoshs/i }
      });
    }
    
    if (workers.length === 0) {
      // Try with both name and partial username
      workers = await Worker.find({
        $or: [
          { name: { $regex: /santhoshs/i } },
          { username: { $regex: /XZ8527/i } }
        ]
      });
    }
    
    if (workers.length === 0) {
      console.log('No workers found matching the criteria.');
      console.log('Available workers in database:');
      const allWorkers = await Worker.find({}).select('name username rfid');
      allWorkers.forEach(worker => {
        console.log(`- Name: ${worker.name}, Username: ${worker.username}, RFID: ${worker.rfid}`);
      });
    } else {
      console.log(`Found ${workers.length} worker(s):`);
      workers.forEach(worker => {
        console.log(`ID: ${worker._id}`);
        console.log(`Name: ${worker.name}`);
        console.log(`Username: ${worker.username}`);
        console.log(`RFID: ${worker.rfid}`);
        console.log(`Batch: ${worker.batch || 'Not specified'}`);
        console.log(`Department: ${worker.department || 'Not specified'}`);
        console.log(`Salary: ${worker.salary}`);
        console.log('---');
      });
      
      // Return the first worker found
      return workers[0];
    }
  } catch (error) {
    console.error('Error finding worker:', error);
  } finally {
    await mongoose.connection.close();
  }
  
  return null;
}

// Run the function
findWorker();