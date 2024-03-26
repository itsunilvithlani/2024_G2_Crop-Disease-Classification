import React, { useState } from 'react'
import './Navbar.css' // Import your CSS file
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true) // Initial collapsed state

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed) // Toggle collapse state on button click
  }

  return (
    <div className="colr navbar navbar-expand-lg shape">
      <nav className="container block">
        <Link className="navbar-brand block1" to="/">
          DrPlant
        </Link>
        <button
          className="navbar-toggler block2 anim"
          type="button"
          onClick={handleToggle} // Use onClick handler for proper toggling
          aria-expanded={isCollapsed} // Update aria-expanded dynamically
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse left block1 ${
            isCollapsed ? '' : 'show'
          }`} // Conditionally add 'show' class
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active block2">
              <Link className="nav-link navbar-brand centered-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item block2">
              <Link
                className="nav-link navbar-brand centered-link "
                to="/Services"
              >
                services
              </Link>
            </li>
            <li className="nav-item block2">
              <Link
                className="nav-link navbar-brand centered-link"
                to="/Contact_us"
              >
                contact us
              </Link>
            </li>
            <li className="nav-item blockl">
              <Link className="nav-link navbar-brand centered-link blockl23" to="/Login">
                Login
              </Link>
            </li>
            <li>
              <Link
                className="nav-link navbar-brand centered-link blockl23"
                to="/Subscribe"
              >
                Subscribe
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
