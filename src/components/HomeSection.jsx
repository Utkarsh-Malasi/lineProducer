import React from 'react'

const HomeSection = ({ scrollToSection, galleryImages }) => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Full-page diagonal gallery background - Enhanced to cover whole page with vibrant images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Diagonal Gallery - First Direction - Centered and more vibrant */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full transform -rotate-12 flex items-center justify-center z-5">
          <div className="flex animate-scroll-left hover:pause">
            {galleryImages.map((img, index) => (
              <div key={`left-${index}`} className="h-64 sm:h-80 w-80 sm:w-96 flex-shrink-0 mx-2 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-110 shadow-xl group">
                <img 
                  src={img} 
                  alt={`Project ${index}`} 
                  className="h-full w-full object-cover filter saturate-[1.8] brightness-110 group-hover:saturate-[2.2] transition-all duration-500" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            ))}
            {galleryImages.map((img, index) => (
              <div key={`left-dup-${index}`} className="h-64 sm:h-80 w-80 sm:w-96 flex-shrink-0 mx-2 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-110 shadow-xl group">
                <img 
                  src={img} 
                  alt={`Project ${index}`} 
                  className="h-full w-full object-cover filter saturate-[1.8] brightness-110 group-hover:saturate-[2.2] transition-all duration-500" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Diagonal Gallery - Second Direction - Centered and more vibrant */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full transform rotate-12 flex items-center justify-center z-5">
          <div className="flex animate-scroll-right hover:pause">
            {galleryImages.map((img, index) => (
              <div key={`right-${index}`} className="h-64 sm:h-80 w-80 sm:w-96 flex-shrink-0 mx-2 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-110 shadow-xl group">
                <img 
                  src={img} 
                  alt={`Project ${index}`} 
                  className="h-full w-full object-cover filter saturate-[1.8] brightness-110 group-hover:saturate-[2.2] transition-all duration-500" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            ))}
            {galleryImages.map((img, index) => (
              <div key={`right-dup-${index}`} className="h-64 sm:h-80 w-80 sm:w-96 flex-shrink-0 mx-2 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-110 shadow-xl group">
                <img 
                  src={img} 
                  alt={`Project ${index}`} 
                  className="h-full w-full object-cover filter saturate-[1.8] brightness-110 group-hover:saturate-[2.2] transition-all duration-500" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Darker overlay to improve text readability while still showcasing vibrant images */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 z-10"></div>
      </div>
       {/* Centered Logo with enhanced styling */}
       {/* <div className="relative sm:mt-4 w-full max-w-md mx-auto transform hover:scale-105 transition-all duration-500">
            <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-blue-900/30 to-indigo-900/30 backdrop-blur-sm border border-white/10 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative bg-gradient-to-r from-blue-600/80 to-indigo-700/80 p-6 rounded-full shadow-xl border-2 border-white/30 backdrop-blur-sm hover:shadow-blue-500/30 transition-all duration-500 ">
                  <img 
                    src="./src/images/logo.png" 
                    alt="AK Films Logo" 
                    className="h-48 w-48 sm:h-64 sm:w-64 object-contain transition-all duration-500" 
                  />
                  <div className="absolute -bottom-2 left-0 right-0 text-center">
                    <span className="text-white font-bold text-xl tracking-wider drop-shadow-lg">AK FILMS</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-xl"></div>
            </div>
          </div> */}
      {/* Content positioned on top of the diagonal gallery */}
      <div className="container  px-4 mx-auto my-auto relative z-20">
        <div className="flex flex-col items-center text-center pt-10 mx-auto my-auto">
          <div className="w-full max-w-3xl mb-10 sm:pt-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">AK Films & Productions</h1>
            <p className="text-3xl text-white mb-8 drop-shadow-xl">Your Heroes Behind The Camera</p>            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg border border-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                View Our Work
              </button>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
  )
}

export default HomeSection