const mongoose = require('mongoose')

const alertSchema = new mongoose.Schema({
  room: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 6
  },
  alertText: {
    type: String,
    require: true,
    minLength: 4,
  }
})

module.exports = mongoose.model('alert', alertSchema);