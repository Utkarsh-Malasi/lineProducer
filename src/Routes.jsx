import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Services from './components/Services'
import Ads from './projectRoutes/Ads'
import KashmirFiles from './projectRoutes/KashmirFiles'
import Music from './projectRoutes/Music'
import Series from './projectRoutes/Series'
const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/kashmirFiles" element={<KashmirFiles />} />
        <Route path="/musicVideo" element={<Music />} />
        <Route path="/tv-series" element={<Series />} />

    </Routes>
    </>
  )
}

export default AppRoutes