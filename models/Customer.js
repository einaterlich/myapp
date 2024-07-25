const mongoose = require('mongoose');

// Define the customer schema
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  text: { type: String, required: false },
});

// Use the existing collection name 'Customers'
const Customer = mongoose.model('Customer', customerSchema, 'Customers');

module.exports = Customer;
