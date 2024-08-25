const mongoose = require('mongoose');

async function connectToDB() {
    const URL = 'mongodb://localhost:27017/posapp';

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connection Successful');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        process.exit(1);
    }

    mongoose.connection.on('error', (error) => {
        console.error('MongoDB Connection Error:', error);
    });
}

module.exports = connectToDB;
