const Customer = require('../models/Customer');

const saveCustomer = async (req, res) => {
  const { name, email, phone, text } = req.body;
  const newCustomer = new Customer({ name, email, phone, text });

  try {
    await newCustomer.save();
    console.log('Customer data saved:', newCustomer);
    res.status(201).send('Customer data saved successfully');
  } catch (error) {
    console.error('Error saving customer data:', error);
    res.status(500).send('Failed to save customer data');
  }
};

module.exports = { saveCustomer };
