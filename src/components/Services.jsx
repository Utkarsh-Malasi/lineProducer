import React from 'react'
import Header from './Header'

const Services = () => {
  return (
  <>
  <Header />
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-green-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl text-blue-500 mb-4">
            <i className="fas fa-video"></i>
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Film Production</h3>
          <p className="text-black">
            Full-service film production including pre-production planning, shooting, and post-production editing. We specialize in feature films, documentaries and short films.
          </p>
        </div>

        <div className="bg-green-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl text-blue-500 mb-4">
            <i className="fas fa-ad"></i>
          </div>
            <h3 className="text-xl font-bold text-black mb-3">Commercial Production</h3>
          <p className="text-black">
            Creative and impactful commercial production for brands and businesses. From concept development to final delivery, we create ads that resonate.
          </p>
        </div>

        <div className="bg-green-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl text-blue-500 mb-4">
            <i className="fas fa-music"></i>
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Music Video Production</h3>
          <p className="text-black">
            Professional music video production services with creative direction, cinematography, and state-of-the-art equipment for artists and labels.
          </p>
        </div>

        <div className="bg-green-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl text-blue-500 mb-4">
            <i className="fas fa-tv"></i>
          </div>
          <h3 className="text-xl font-bold text-black mb-3">TV Series Production</h3>
          <p className="text-black">
            End-to-end television series production including script development, casting, filming, and post-production for various platforms and channels.
          </p>
        </div>

        <div className="bg-green-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl text-blue-500 mb-4">
            <i className="fas fa-camera"></i>
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Location Services</h3>
          <p className="text-black">
            Comprehensive location scouting and management services in Uttarakhand. We handle permits, logistics, and local coordination for smooth productions.
          </p>
        </div>
        <div className="bg-green-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl text-blue-500 mb-4">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Event Management</h3>
          <p className="text-black">
            Complete event planning and execution services for film-related events, premieres, press conferences, and promotional activities in scenic Uttarakhand locations.
          </p>
        </div>

      </div>
    </div>

  </>
  )
}

export default Services