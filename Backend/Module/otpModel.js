const mongoose = require('mongoose')
const mailSender = require('../utility/mailSender')

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  otp: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    require: true,
  },
})

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      'Verification Email',
      `<h1>Please Confirm your OTP</h1>
      <p>Here is your OTP code ${otp} </p>`,
    )
    console.log('Email send Successfully', mailResponse)
  } catch (error) {
    console.log('Error occurred while sending email:', error)
    throw error
  }
}

otpSchema.pre('save', async function (next) {
  console.log('New document saved to the database')
  console.log(this.email)
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp)
  }
  next()
})
module.exports = mongoose.model('OTP', otpSchema)
