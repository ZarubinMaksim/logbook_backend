const mongoose = require('mongoose')

const alarmSchema = new mongoose.Schema({
  room: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 6
  },
  date: {
    type: Date,
    require: true,
  },
  // time: {
  //   type: String,
  //   require: true,
  // }
})

module.exports = mongoose.model('alarm', alarmSchema)