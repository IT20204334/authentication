const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 6
    },
    lastName: {
        type: String,
        required: true,
        min: 6
    },
    mobileNumber: {
        type: Number,
        required: true,
        min: 9,
    },

    image: {
        type: String
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 20,
        min: 6
    }

});

module.exports = mongoose.model('User', userSchema);
