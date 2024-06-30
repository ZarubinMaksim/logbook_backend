const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
  room: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 6
  },
  company: {
    type: String,
    require: false,
    minLength: 2,
  },
  vat: {
    type: String,
    require: false,
    minLength: 2,
  },
  details: {
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

module.exports = mongoose.model('invoice', invoiceSchema)