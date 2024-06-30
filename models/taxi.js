const mongoose = require('mongoose')

const taxiSchema = new mongoose.Schema({
  route: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 10
  },
  room: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 6
  },
  date: {
    type: String,
    require: true,
    minLength: 2,
  },
  flight: {
    type: String,
    require: false,
    minLength: 2,
  },
  pax: {
    type: String,
    require: false,
    minLength: 1,
    maxLength: 3,
  },
  phone: {
    type: String,
    require: false,
    minLength: 2,
  }
})

module.exports = mongoose.model('taxi', taxiSchema)