import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

export default function Verifyotp() {
  const [otp, setOtp] = useState('')
  const [Message, setMessage] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { email } = location.state || {}

  const handleonchange = (e) => {
    setOtp(e.target.value)
  }

  const handleonsubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:3001/api/verify',
        {
          email,
          otp,
        },
        {
          headers: { 'Content-Type': 'application/json' }, // Set Content-Type
        },
      )

      if (response.status === 200) {
        setMessage('OTP is correct and user is registered successfully')
        navigate('/')
      } else {
        setMessage('Login failed. Please check your email and try again.')
      }
    } catch (error) {
      console.error('Error calling backend:', error)
      setMessage('An error occurred. Please try again later.')
    }
  }

  return (
    <>
      <Navbar />
      <form className="con">
        <div className="contain1">
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Verify OTP
            </label>
            <input
              type="text" // Assuming OTP is a text field
              id="form2Example1"
              className="form-control"
              value={otp}
              onChange={handleonchange}
            />
          </div>
          <button
            type="button" // Should be "button" for form submission
            className={`colr btn-block mb-4 btn1221`}
            onClick={handleonsubmit}
          >
            Verify
          </button>
          <div>
            <p>{Message}</p>
          </div>
        </div>
      </form>
    </>
  )
}
