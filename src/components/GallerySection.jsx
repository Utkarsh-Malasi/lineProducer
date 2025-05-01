import React, { useState } from 'react'

const GallerySection = ({ galleryImages }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'film', name: 'Films' },
    { id: 'tv', name: 'TV Series' },
    { id: 'ad', name: 'Advertisements' },
    { id: 'music', name: 'Music Videos' }
  ]

  return (
    <section id="gallery" className="py-12 md:py-20 bg-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Our Work Gallery</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Explore our diverse portfolio of films, advertisements, music videos, and TV series productions.</p>
        </div>
        
        {/* Filter Categories - Improved for mobile */}
        <div className="flex overflow-x-auto md:flex-wrap justify-center mb-8 md:mb-12 gap-2 pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="inline-flex md:flex-wrap justify-center w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base whitespace-nowrap mx-1 my-1 ${activeCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Masonry Gallery - Improved for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3 md:p-4">
                <h3 className="text-white text-base md:text-lg font-semibold">Project {index + 1}</h3>
                <p className="text-gray-200 text-xs md:text-sm">Category: {index % 4 === 0 ? 'Film' : index % 4 === 1 ? 'TV Series' : index % 4 === 2 ? 'Advertisement' : 'Music Video'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection