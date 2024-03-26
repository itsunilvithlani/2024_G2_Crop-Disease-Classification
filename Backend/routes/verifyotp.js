const express = require('express')
const OTP = require('../Module/otpModel')
const users = require('../Module/user')

const router = express.Router()

router.post('/', async (req, res) => {
  const { email, otp } = req.body
  //   res.send('Hello world')
  try {
    if (!email || !otp) {
      res.json('Email and otp is requere ')
    } else {
      const response = await OTP.find({ email })
        .sort({ createdAt: -1 })
        .limit(1)
      if (response.length === 0 || otp !== response[0].otp) {
        return res.status(400).json({
          success: false,
          message: 'The OTP is not valid',
        })
      }
      const user = new users({ email })
      await user.save()
      console.log(user)
      res.json('Email is Register, sucsess')
    }
  } catch (error) {
    console.log(error)
  }
})
module.exports = router
