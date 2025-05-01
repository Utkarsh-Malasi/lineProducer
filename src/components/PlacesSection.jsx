import React from 'react'

const PlacesSection = () => {
  // Sample filming locations data
  const locations = [
    {
      id: 1,
      name: "Mussoorie",
      description: "Known as the 'Queen of Hills', Mussoorie offers stunning mountain vistas and colonial architecture that has been featured in numerous productions including 'The Kashmir Files'.",
      features: ["Mountain landscapes", "Colonial architecture", "Mall Road", "Library Chawk", "Sister Bazaar"],
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Rishikesh",
      description: "The spiritual hub with the sacred Ganges River flowing through it provides a perfect backdrop for both spiritual and adventure-themed productions.",
      features: ["River scenes", "Temples", "Suspension bridges", "Adventure sports", "Spiritual settings"],
      image: "https://images.unsplash.com/photo-1624807136278-e2973be118ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Dehradun",
      description: "The capital city of Uttarakhand offers a mix of urban and natural settings with its lush valleys and modern infrastructure.",
      features: ["Urban settings", "Forest Research Institute", "Robber's Cave", "Paltan Bazaar", "Modern infrastructure"],
      image: "https://images.unsplash.com/photo-1606586593596-5308e16d0a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVocmFkdW58ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      name: "Haridwar",
      description: "One of the holiest cities in India, Haridwar offers authentic cultural and religious backdrops for productions requiring traditional Indian settings.",
      features: ["Ganga Aarti", "Ghats", "Temples", "Religious ceremonies", "Traditional markets"],
      image: "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 5,
      name: "Nainital",
      description: "Known for its picturesque landscapes and serene ambiance, Almora provides a perfect backdrop for both natural and spiritual productions.",
      features: ["Mountain landscapes", "Lake scenes", "Spiritual settings", "Nature-based settings", "Adventure sports"],
      image: "https://images.unsplash.com/photo-1667029838861-2fe3a590a1d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbml0YWx8ZW58MHx8MHx8fDA%3D"
    }
    ]

  return (
    <section id="places" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Filming Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the stunning locations across Uttarakhand where we bring stories to life.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((location) => (
            <div key={location.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Location Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Specific Location?</h3>
          <p className="text-lg mb-6">Our team specializes in location scouting throughout Uttarakhand. We can help you find the perfect backdrop for your production.</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Our Location Scouts
          </button>
        </div>
      </div>
    </section>
  )
}

export default PlacesSection