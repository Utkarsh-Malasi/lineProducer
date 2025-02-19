import {React, useState } from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Ads from './projectRoutes/Ads'
import KashmirFiles from './projectRoutes/KashmirFiles'
import Music from './projectRoutes/Music'
import Series from './projectRoutes/Series'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/kashmirFiles" element={<KashmirFiles />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/ads" element={<Ads />} />
      <Route path="/projects/musicVideo" element={<Music />} />
      <Route path="/projects/tv-series" element={<Series />} />
    </Routes> 
  )
}

export default App
