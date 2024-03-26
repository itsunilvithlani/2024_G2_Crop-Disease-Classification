const express = require('express')
const users = require('../Module/user')

const router = express.Router()

router.post('/', async (req, res) => {
  const { email } = req.body
  //   res.send('Hello world')
  try {
    if (!email) {
      res.json('Email is not vailied')
    } else {
      const user = new users({ email })
      user.save()
      console.log(user)
      res.json('Email is Register, sucsess')
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
