const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  department: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 5
  },
  firstname: {
    type: String,
    require: true,
    minLength: 2,
  },
  name: {
    type: String,
    require: true,
    minLength: 2,
  },
  middlename: {
    type: String,
    require: false,
    minLength: 2,
  },
  phone: {
    type: String,
    require: false,
    minLength: 2,
  },
  mobile: {
    type: String,
    require: false,
    minLength: 2,
  },
  email: {
    type: String,
    require: false,
    minLength: 2,
  },
})

module.exports = mongoose.model('contact', contactSchema)