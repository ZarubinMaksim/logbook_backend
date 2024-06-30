const Contact = require('../models/contact')

const createContact = (req, res) => {
  const {department, firstname, name, middlename, phone, mobile, email} = req.body
  Contact.create({ department, firstname, name, middlename, phone, mobile, email })
  .then((contact) => {
    res.status(200).send({ data: contact})
  })
}

const getContacts = (req, res) => {
  Contact.find()
  .then((contacts) => {
    res.status(200).send({ data: contacts})
  })
}

const deleteContact = (req, res) => {
  const { id } = req.params
  Contact.findByIdAndDelete(id)
  .then((contact) => {
    if (!contact) {
      return res.status(404).send({ message: 'Contact not found'})
    }
    res.status(200).send({ data: contact })
  })
  .catch((error) => {
    res.status(500).send({ message: 'Error:', error})
  })
}

const updateContact = (req, res) => {
  const { id } = req.params
  const { department, firstname, name, middlename, phone, mobile, email } = req.body
  Contact.findByIdAndUpdate(id, { department: department, firstname: firstname, name: name, middlename: middlename, phone: phone, mobile: mobile, email: email}, {runValidators: true})
    .then((contact) => {
      res.status(200).send({ data: contact})
    })
}


module.exports = {
  createContact,
  getContacts,
  deleteContact,
  updateContact
};