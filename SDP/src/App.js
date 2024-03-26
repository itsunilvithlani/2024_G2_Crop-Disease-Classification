import './App.css'

import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Info from './Components/Info'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import About from './Components/About/About'
import Contact_us from './Components/Contact_us/Contact_us'
import Services from './Components/Services/Services'
import Login from './Components/Login/Login'
import Verifyotp from './Components/Login/Verifyotp'
import Diseaseinfo from './Components/DiseaseInfo/Diseaseinfo'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Info" element={<Info />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact_us" element={<Contact_us />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Verifyotp" element={<Verifyotp />} />
          <Route path="/Diseaseinfo" element={<Diseaseinfo />} />
          <Route path="/Subscribe" element={<Subscribe />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
