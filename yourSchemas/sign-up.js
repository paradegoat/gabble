
const mongoose = require('mongoose');

const newSignUpSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
})



const newSignUp = mongoose.model('newSignUp', newSignUpSchema);

module.exports = newSignUp;
