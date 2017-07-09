const mongoose = require('mongoose');

const newGabSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    date: { type: Date, required: true },
    message: { type: String, required: true },
    firstAppearance: [{
      character: { type: String }
    }]
})



// // on every save, add the date
// newGabSchema.pre('save', function(next) {
// // get the current date
// var currentDate = new Date();
//
// // change the updated_at field to current date
// this.updated_at = currentDate;
//
// // if created_at doesn't exist, add to that field
// if (!this.created_at)
// this.created_at = currentDate;
//
// next();
// });

const newGab = mongoose.model('newGab', newGabSchema);

module.exports = newGab;
