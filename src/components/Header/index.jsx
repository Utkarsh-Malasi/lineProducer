import React, { useState } from 'react'

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-blue-600">AK PRODUCTIONS</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`font-medium transition-colors ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`font-medium transition-colors ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`font-medium transition-colors ${activeSection === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`font-medium transition-colors ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`font-medium transition-colors ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Contact
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40 pt-20`}
      >
        <div className="flex flex-col space-y-4 px-6">
          <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-800 hover:text-blue-600 font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-800 hover:text-blue-600 font-medium">
            About
          </button>
          <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-800 hover:text-blue-600 font-medium">
            Services
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-gray-800 hover:text-blue-600 font-medium">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-800 hover:text-blue-600 font-medium">
            Contact
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header