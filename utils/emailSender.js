
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport (Gmail in this case)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to send a confirmation email to the user about sending the form 
const sendConfirmationEmail = async (customerEmail) => {
    console.log("Success send a confirmation email to the user about sending the form");
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: customerEmail,
      subject: 'Form Submission Successful',
      text: `Dear User,\n\nThank you for submitting the form on our website. Our team will start working on hacking your Instagram account and you will receive another email within 24 hours once your account is ready to use.\n\nBest regards,\nYour Website Team`
    };
  
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  };

  // Function to send an email to your address with form data
  const sendFormDataEmail = async (formData) => {
    console.log("Success send a confirmation email to the user about sending the form");
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Form Submission',
      text: `A new form has been submitted with the following details:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nText: ${formData.text}`
    };
  
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending form data email:', error);
    }
  };

  module.exports = {
    sendConfirmationEmail,
    sendFormDataEmail
  };
