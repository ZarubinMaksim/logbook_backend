const Umbrella = require('../models/umbrella')

const createUmbrella = (req, res) => {
  const { room, umbrella} = req.body
  Umbrella.create({ room, umbrella })
  .then((umbrella) => {
    res.status(200).send({ data: umbrella})
  })
}

const getUmbrellas = (req, res) => {
  Umbrella.find()
  .then((umbrellas) => {
    res.status(200).send({ data: umbrellas})
  })
}

const deleteUmbrella = (req, res) => {
  const { id } = req.params
  Umbrella.findByIdAndDelete(id)
  .then((umbrella) => {
    if (!umbrella) {
      return res.status(404).send({ message: 'Umbrella not found'})
    }
    res.status(200).send({ data: umbrella })
  })
  .catch((error) => {
    res.status(500).send({ message: 'Error:', error})
  })
}

const updateUmbrella = (req, res) => {
  const { id } = req.params
  const { room, umbrella } = req.body
  Umbrella.findByIdAndUpdate(id, { room: room, umbrella: umbrella}, {runValidators: true})
    .then((umbrella) => {
      res.status(200).send({ data: umbrella})
    })
}

module.exports = {
  createUmbrella,
  getUmbrellas,
  deleteUmbrella,
  updateUmbrella,
};