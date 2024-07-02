const Taxi = require('../models/taxi')

const createTaxi = (req, res) => {
  const {route, room, date, flight, pax, phone} = req.body
  Taxi.create({ route, room, date, flight, pax, phone })
  .then((taxi) => {
    res.status(200).send({ data: taxi})
  })
}

const getTaxies = (req, res) => {
  Taxi.find()
  .then((taxies) => {
    res.status(200).send({ data: taxies})
  })
}

const deleteTaxi = (req, res) => {
  const { id } = req.params
  Taxi.findByIdAndDelete(id)
  .then((taxi) => {
    if (!taxi) {
      return res.status(404).send({ message: 'Taxi not found'})
    }
    res.status(200).send({ data: taxi })
  })
  .catch((error) => {
    res.status(500).send({ message: 'Error:', error})
  })
}

const updateTaxi = (req, res) => {
  const { id } = req.params
  const { route, room, date, pax, flight, phone } = req.body
  Taxi.findByIdAndUpdate(id, { route: route, room: room, date: date, pax: pax, flight: flight, phone: phone}, {runValidators: true})
    .then((taxi) => {
      res.status(200).send({ data: taxi})
    })
}


module.exports = {
  createTaxi,
  getTaxies,
  deleteTaxi,
  updateTaxi,
};