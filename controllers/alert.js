const Alert = require('../models/alert')

const createAlert = (req, res) => {
  const {room, alertText} = req.body
  Alert.create({ room, alertText })
  .then((alert) => {
    res.status(200).send({ data: alert})
  })
}

const getAlerts = (req, res) => {
  Alert.find()
  .then((alerts) => {
    res.status(200).send({ data: alerts})
  })
}

const deleteAlert = (req, res) => {
  const { id } = req.params
  Alert.findByIdAndDelete(id)
  .then((alert) => {
    if (!alert) {
      return res.status(404).send({ message: 'Alert not found'})
    }
    res.status(200).send({ data: alert })
  })
  .catch((error) => {
    res.status(500).send({ message: 'Error:', error})
  })
}

const updateAlert = (req, res) => {
  const { id } = req.params
  const { room, alertText } = req.body
  Alert.findByIdAndUpdate(id, { room: room, alertText: alertText}, {runValidators: true})
    .then((alert) => {
      res.status(200).send({ data: alert})
    })
}


module.exports = {
  createAlert,
  getAlerts,
  deleteAlert,
  updateAlert,
};