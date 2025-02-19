import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="flex space-x-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/about" className="hover:text-gray-300">About</Link>
      <Link to="/projects" className="hover:text-gray-300">Projects</Link>
      <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      <Link to="/services" className="hover:text-gray-300">Services</Link>  
      <Link to="/ads" className="hover:text-gray-300">Ads</Link>
      <Link to="/kashmirFiles" className="hover:text-gray-300">Kashmir Files</Link>
      <Link to="/musicVideo" className="hover:text-gray-300">Music Video</Link>
      <Link to="/tv-series" className="hover:text-gray-300">TV Series</Link>
    </nav>
  )
}

export default Navigation