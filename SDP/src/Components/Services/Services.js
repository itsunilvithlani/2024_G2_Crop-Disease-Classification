import React from 'react'
import './Services.css'
import Navbar from '../Navbar'

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="all">
        <div className="services-container">
          <h1 className="services-heading">Our Services</h1>
          <div className="service">
            <h2 className="service-title">Leaf Disease Detection</h2>
            <p className="service-description">
              We use advanced computer vision algorithms to detect and identify
              leaf diseases in plants. Our technology helps in early diagnosis
              and effective treatment.
            </p>
          </div>
          <div className="service">
            <h2 className="service-title">Image Classification</h2>
            <p className="service-description">
              DrPlant provides image classification capabilities, allowing users
              to categorize and identify various plant species and leaf
              conditions. Whether you need to differentiate between healthy and
              diseased leaves or identify specific plant types, our image
              classification service can assist you.
            </p>
          </div>
          <div className="service">
            <h2 className="service-title">Quick and Accurate Results</h2>
            <p className="service-description">
              DrPlant provides quick and accurate results, allowing farmers and
              gardeners to take immediate action to protect their crops.
            </p>
          </div>
          <div className="service">
            <h2 className="service-title">User-Friendly Interface</h2>
            <p className="service-description">
              Our user-friendly interface makes it easy for users to upload
              images, receive diagnostic results, and access information about
              plant diseases and image classifications.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
