const Invoice = require('../models/invoice')

const createInvoice = (req, res) => {
  const {room, company, vat, details, email} = req.body
  Invoice.create({ room, company, vat, details, email })
  .then((invoice) => {
    res.status(200).send({ data: invoice})
  })
}

const getInvoices = (req, res) => {
  Invoice.find()
  .then((invoices) => {
    res.status(200).send({ data: invoices})
  })
}

const deleteInvoice = (req, res) => {
  const { id } = req.params
  Invoice.findByIdAndDelete(id)
  .then((invoice) => {
    if (!invoice) {
      return res.status(404).send({ message: 'Invoice not found'})
    }
    res.status(200).send({ data: invoice })
  })
  .catch((error) => {
    res.status(500).send({ message: 'Error:', error})
  })
}


module.exports = {
  createInvoice,
  getInvoices,
  deleteInvoice,
};