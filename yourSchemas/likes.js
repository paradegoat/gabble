
const mongoose = require('mongoose');

const newSignUpSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});



const what = mongoose.model('what', newSignUpSchema);

module.exports = what;
