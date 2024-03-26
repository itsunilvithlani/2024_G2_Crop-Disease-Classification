import React, { useState } from 'react'
import './blockcss.css'

const Block = ({ title, content }) => {
  return (
    <div className="card2">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Block
