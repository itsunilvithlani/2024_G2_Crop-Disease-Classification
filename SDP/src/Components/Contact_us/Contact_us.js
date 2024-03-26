import React from 'react'
import './style.css'
import plant from './plant.png'
import Navbar from '../Navbar'

export default function Contact_us() {
  return (
    <>
      <Navbar />
      <div className="contact-info-container">
        <div className="about-drplant">
          <h2>DrPlant</h2>
          <div className="DrPlant">
            <p>
              DrPlant is a revolutionary leaf disease detection website that
              utilizes advanced technology to identify plant diseases. Our
              mission is to help farmers protect their crops by providing
              accurate and timely disease detection solutions.
            </p>
            <img src={plant} height={'250px'} width={'250px'} />
          </div>
        </div>

        <div className="contact-box">
          <h1>ContactUs</h1>

          <div className="contact-details">
            <div className="email">
              <label>Email:</label>

              <span>
                patelparth1167@gmail.com
              </span>
            </div>

            <div className="phone">
              <label>Phone: </label>

              <span>
                {' '}
                +91 9438780513
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
