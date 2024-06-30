const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  note: {
    type: String,
    require: false,
    minLength: 1,
  }
})

module.exports = mongoose.model('note', noteSchema)