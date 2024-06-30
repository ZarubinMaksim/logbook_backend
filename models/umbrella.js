const mongoose = require('mongoose')

const umbrellaSchema = new mongoose.Schema({
  room: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 6
  },
  umbrella: {
    type: String,
    require: true,
    maxLength: 2,
  },
})

module.exports = mongoose.model('umbrella', umbrellaSchema)