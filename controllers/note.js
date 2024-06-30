const Note = require('../models/note')

const createNote = (req, res) => {
  const { note } = req.body
  Note.create({ note })
  .then((note) => {
    res.status(200).send({ data: note})
  })
}

const getNote = (req, res) => {
  Note.find()
  .then((note) => {
    res.status(200).send({ data: note})
  })
}

const updateNote = (req, res) => {
  const { id } = req.params
  const { note } = req.body
  Note.findByIdAndUpdate(id, { note: note }, {new: true, runValidators: true})
  .then((note) => {
    console.log(note)
    res.status(200).send({ data: note})
  })
}



module.exports = {
  createNote,
  getNote,
  updateNote,
};