const Alarm = require('../models/alarm')

const createAlarm = (req, res) => {
  const {room, date} = req.body
  Alarm.create({ room, date })
  .then((alarm) => {
    res.status(200).send({ data: alarm})
  })
}

const getAlarms = (req, res) => {
  Alarm.find()
  .then((alarms) => {
    res.status(200).send({ data: alarms})
  })
}

const deleteAlarm = (req, res) => {
  const { id } = req.params
  Alarm.findByIdAndDelete(id)
  .then((alarm) => {
    if (!alarm) {
      return res.status(404).send({ message: 'Alarm not found'})
    }
    res.status(200).send({ data: alarm })
  })
  .catch((error) => {
    res.status(500).send({ message: 'Error:', error})
  })
}

const updateAlarm = (req, res) => {
  const { id } = req.params
  const { room, date } = req.body
  Alarm.findByIdAndUpdate(id, { room: room, date: date}, {runValidators: true})
    .then((alarm) => {
      res.status(200).send({ data: alarm})
    })
}


module.exports = {
  createAlarm,
  getAlarms,
  deleteAlarm,
  updateAlarm
};