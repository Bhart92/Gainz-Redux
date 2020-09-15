const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: true
    },
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    },
    savedWorkoutList: {
        type: Array
    }
});

module.exports = User = mongoose.model('user', UserSchema);