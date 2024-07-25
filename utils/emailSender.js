// utils/emailSender.js

const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport (Gmail in this case)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your email password (or app-specific password)
  }
});

// Function to send a confirmation email to the user about sending the form 
const sendConfirmationEmail = (userEmail) => {
    try{
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'IHACK-Form Submission Confirmation',
            text: `Your form has been successfully submitted. Our team will get back to you within 24 hours regarding your Instagram account.`
          };
        
          return transporter.sendMail(mailOptions);
    }
    catch(error){
        console.log("having problem with sending email confirmation to user")
    }
    
  };

  // Function to send an email to your address with form data
const sendFormDataEmail = (formData) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'einaterlich123@gmail.com',
      subject: 'IHACK-New Form Submission',
      text: `New form submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.text}`
    };
  
    return transporter.sendMail(mailOptions);
  };

  module.exports = { sendConfirmationEmail, sendFormDataEmail };
