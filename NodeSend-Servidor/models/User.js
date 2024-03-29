
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

usersSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('Users', usersSchema);