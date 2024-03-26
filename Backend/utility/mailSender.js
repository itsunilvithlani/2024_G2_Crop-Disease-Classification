// utils/mailSender.js
const nodemailer = require('nodemailer')

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Use environment variable
      port: 587, // For Gmail's TLS port
      secure: false, // Use `true` for SSL/TLS if required
      auth: {
        user: 'patelparth1167@gmail.com', // Use environment variable
        pass: 'jfls yslg zgvk srop', // Use environment variable
      },
    })

    const mailOptions = {
      from: 'patelparth1167@gmail.com', // Replace with your sender address
      to: email,
      subject: title,
      html: body,
    }

    const info = await transporter.sendMail(mailOptions)

    console.log('Email sent successfully:', info.messageId)

    return info // Optionally return response for error handling
  } catch (error) {
    console.error('Error sending email:', error.message)
    throw error // Re-throw for caller handling
  }
}

module.exports = mailSender
