const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/expensetracker');
    console.log('MongoDB Connection Successful');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
  }
}

connectDB();
