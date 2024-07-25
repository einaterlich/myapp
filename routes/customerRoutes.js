const express = require('express');
const { saveCustomer } = require('../controllers/customerController'); 
const router = express.Router();

router.post('/customer', saveCustomer);

module.exports = router;
