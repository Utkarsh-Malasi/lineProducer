import React, { useState, useEffect } from 'react'
import logo from '../images/logo.png'

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg backdrop-blur-sm py-2' : 'bg-gradient-to-r from-gray-900 to-gray-800 py-4'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo Section */}
          <div className='flex items-end  z-10 space-x-3 sm:pt-16 pt-4'>
            <div className='w-28 h-28 sm:w-40 sm:h-40 overflow-hidden rounded-full bg-white flex items-center justify-center border-4 border-blue-00 shadow-xl absolute -bottom-12 transform hover:scale-105 transition-all duration-300'>
              <img src={logo} alt="AK Productions Logo" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <h1 className='text-lg md:text-2xl font-bold text-white tracking-wide ml-28'>AK </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <button 
              onClick={() => scrollToSection('home')} 
              className={`nav-link text-white font-medium hover:text-blue-400 transition-colors duration-200 border-b-2 ${activeSection === 'home' ? 'border-blue-500' : 'border-transparent'} px-1 py-1`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`nav-link text-white font-medium hover:text-blue-400 transition-colors duration-200 border-b-2 ${activeSection === 'about' ? 'border-blue-500' : 'border-transparent'} px-1 py-1`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`nav-link text-white font-medium hover:text-blue-400 transition-colors duration-200 border-b-2 ${activeSection === 'projects' ? 'border-blue-500' : 'border-transparent'} px-1 py-1`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`nav-link text-white font-medium hover:text-blue-400 transition-colors duration-200 border-b-2 ${activeSection === 'services' ? 'border-blue-500' : 'border-transparent'} px-1 py-1`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`nav-link text-white font-medium hover:text-blue-400 transition-colors duration-200 border-b-2 ${activeSection === 'contact' ? 'border-blue-500' : 'border-transparent'} px-1 py-1`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className='md:hidden text-white z-50'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}
      >
        <div className='flex flex-col space-y-6 pt-20 px-6'>
          <button onClick={() => {scrollToSection('home'); setIsMenuOpen(false)}} className='text-white hover:text-blue-400 font-medium py-2 border-b border-gray-800'>Home</button>
          <button onClick={() => {scrollToSection('about'); setIsMenuOpen(false)}} className='text-white hover:text-blue-400 font-medium py-2 border-b border-gray-800'>About</button>
          <button onClick={() => {scrollToSection('projects'); setIsMenuOpen(false)}} className='text-white hover:text-blue-400 font-medium py-2 border-b border-gray-800'>Projects</button>
          <button onClick={() => {scrollToSection('services'); setIsMenuOpen(false)}} className='text-white hover:text-blue-400 font-medium py-2 border-b border-gray-800'>Services</button>
          <button onClick={() => {scrollToSection('contact'); setIsMenuOpen(false)}} className='text-white hover:text-blue-400 font-medium py-2 border-b border-gray-800'>Contact</button>
        </div>
      </div>
    </header>
  )
}

export default Header