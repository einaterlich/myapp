import React, { useState } from 'react';
import FormComponent from '../FormComponent';
import './CustomerForm.css';
import axios from 'axios';

function CustomerForm() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    text: ''
  });

  const fields = [
    { name: 'name', label: 'User Name:', type: 'text', placeholder: 'Your User Name' },
    { name: 'email', label: 'User Email:', type: 'email', placeholder: 'Your Email' },
    { name: 'phone', label: 'Phone:', type: 'text', placeholder: 'Your Phone Number' },
    { name: 'text', label: 'Add a message:', type: 'text', placeholder: 'Your Text' }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please fill out all mandatory fields.');
      return;
    }
    try {
      await axios.post('http://localhost:5001/api/customer', formData);
      setSuccessMessage('Form data submitted successfully');
      setErrorMessage('');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        text: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div className='main'>
      <div className='form'>
      <div className='details'> 
        <h2>Hack Your Instagram Account</h2>
        <div className='details-p'>
          <p>our team members will bring your account back less then 24 hours.</p>
          <p>Fill your details and wait.</p>
        </div>
      </div>
      <div className='form-container'>
      <FormComponent 
        formData={formData}
        fields={fields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
       {errorMessage && <p className="error-message">{errorMessage}</p>}
       {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    
    </div>
      
    </div>

  );
}

export default CustomerForm;
