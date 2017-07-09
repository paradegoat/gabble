
const mongoose = require('mongoose');


const userAuthSchema = new mongoose.Schema({
      name: {type: String, required: true},
      username: {type: String, required: true},
      password: {type: String, required: true}

      })

const userAuth = mongoose.model('userAuth', userAuthSchema)
module.exports = userAuth
