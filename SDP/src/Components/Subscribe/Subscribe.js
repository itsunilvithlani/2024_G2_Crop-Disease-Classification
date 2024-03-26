import React from 'react'
import Navbar from '../Navbar'
import './Subscribe.css'

export default function Subscribe() {
  return (
    <>
      <Navbar />
      <div className="heading-subscribe">
        <h1 className="none">Subscription</h1>
      </div>
      <div className="card-subscribe">
        <div className="card-sub">
          <h1>99/-</h1>
          <ul>
            <li>Get subscribe for life time</li>
            <li>Upload unlimited image</li>
          </ul>

          <button>subscribe</button>
        </div>
      </div>
    </>
  )
}
