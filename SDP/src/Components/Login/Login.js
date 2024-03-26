import './Login.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import createS3Directory from './createS3Directory' // Import the function for creating an S3 directory

export default function Login() {
  const [email, setEmail] = useState('')
  const [Message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3001/api/otp-send', {
        email,
      })
      console.log(response.data.message)
      if (response.data.message == 'User is already registered') {
        const s3DirectoryCreated = await createS3Directory(email)

        if (s3DirectoryCreated) {
          localStorage.setItem('email', email)
          navigate('/') // Pass email as state
        } else {
          setMessage('Error creating S3 directory')
        }
      } else if (response.status === 200) {
        // Create an S3 directory when the user logs in
        const s3DirectoryCreated = await createS3Directory(email)

        if (s3DirectoryCreated) {
          setMessage('OTP sent successfully')
          localStorage.setItem('email', email)
          navigate('/Verifyotp', { state: { email } }) // Pass email as state
        } else {
          setMessage('Error creating S3 directory')
        }
      } else {
        setMessage('Login failed. Please check your email and try again.')
      }
    } catch (error) {
      console.log(error)
      console.error('Error calling backend:', error)
      setMessage('An error occurred. Please try again later.')
    }
  }

  return (
    <>
      <Navbar />
      <form className="con">
        <div className="container contain1">
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              value={email}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className={`colr1 mb-4 btn1221`}
            onClick={handleSubmit}
          >
            Login
          </button>
          <div>
            <p>{Message}</p>
          </div>
        </div>
      </form>
    </>
  )
}
