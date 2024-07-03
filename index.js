const express = require('express');
const mongoose = require('mongoose')
const { PORT = 3003 } = process.env
const app = express()
const User = require('./models/user')
const { createAlarm, getAlarms, deleteAlarm, updateAlarm } = require('./controllers/alarm');
const { createAlert, getAlerts, deleteAlert, updateAlert } = require('./controllers/alert');
const { createInvoice, getInvoices, deleteInvoice, updateInvoice } = require('./controllers/invoice');
const { createContact, getContacts, deleteContact, updateContact } = require('./controllers/contact');
const { createTaxi, getTaxies, deleteTaxi, updateTaxi } = require('./controllers/taxi');
const { createUmbrella, getUmbrellas, deleteUmbrella, updateUmbrella } = require('./controllers/umbrella');
const { createNote, getNote, updateNote} = require('./controllers/note');


mongoose.connect('mongodb://127.0.0.1:27017/logbook')

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // Обработка предзапросов
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
const createUser = (req, res) => {
  const { name, password } = req.body;

  User.create({ name, password})
  .then((user) => {
    res.status(200).send({ data: user })
  })
}



app.post('/signup', createUser)

app.post('/alarm', createAlarm)
app.get('/alarm', getAlarms)
app.delete('/alarm/:id', deleteAlarm)
app.patch('/alarm/:id', updateAlarm)


app.post('/alert', createAlert)
app.get('/alert', getAlerts)
app.delete('/alert/:id', deleteAlert)
app.patch('/alert/:id', updateAlert)


app.post('/invoice', createInvoice)
app.get('/invoice', getInvoices)
app.delete('/invoice/:id', deleteInvoice)
app.patch('/invoice/:id', updateInvoice)

app.post('/contact', createContact)
app.get('/contact', getContacts)
app.delete('/contact/:id', deleteContact)
app.patch('/contact/:id', updateContact)

app.post('/taxi', createTaxi)
app.get('/taxi', getTaxies)
app.delete('/taxi/:id', deleteTaxi)
app.patch('/taxi/:id', updateTaxi)

app.post('/umbrella', createUmbrella)
app.get('/umbrella', getUmbrellas)
app.delete('/umbrella/:id', deleteUmbrella)
app.patch('/umbrella/:id', updateUmbrella)

app.get('/note', getNote)
app.post('/note', createNote)
app.patch('/note/:id', updateNote)