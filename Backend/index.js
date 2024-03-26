const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001
const db = 'mongodb://localhost:27017/disease_detection'
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/otp-send', require('./routes/otp'))
app.use('/api/verify', require('./routes/verifyotp'))
const connectDB = async () => {
  try {
    mongoose.connect(db)
    console.log('mongoose is connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
  connectDB()
})
