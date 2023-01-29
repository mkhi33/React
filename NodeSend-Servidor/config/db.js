const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_URL);
        console.log('DB connected');
    } catch (error) {
        console.log(`Error: \n${error}`);
    }
};

module.exports = connectDB;