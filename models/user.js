const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  password: {
    type: String,
    required: true,
    minLength: 3
  }
})

module.exports = mongoose.model('user', userSchema)
