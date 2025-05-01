import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectsSection = ({ projects, featuredProject }) => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleProjects, setVisibleProjects] = useState(6)

  // Find Kashmir Files project
  const kashmirFilesProject = projects.find(project => project.title.includes("KASHMIR"));
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects.filter(project => project.id !== 1) // Exclude Kashmir Files from regular grid
    : projects.filter(project => project.category === activeCategory)

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setVisibleProjects(6) // Reset visible projects when changing category
  }

  // Handle show more button click
  const handleShowMore = () => {
    setVisibleProjects(prev => prev + 6)
  }

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span></h2>
        
        {/* Project Categories */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="inline-flex rounded-md shadow-lg bg-gray-800/70 p-1 backdrop-blur-sm border border-gray-700/30 flex-wrap md:flex-nowrap w-full md:w-auto justify-center">
            <button 
              onClick={() => handleCategoryChange('all')}
              className={`px-3 md:px-5 py-2 text-xs md:text-sm font-medium ${activeCategory === 'all' ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-gray-300 bg-transparent'} rounded-lg hover:bg-gray-700 hover:text-blue-300 focus:z-10 focus:ring-2 focus:ring-blue-500 transition-colors duration-200 mx-1 flex-1 md:flex-none whitespace-nowrap`}
            >
              All Projects
            </button>
            <button 
              onClick={() => handleCategoryChange('film')}
              className={`px-3 md:px-5 py-2 text-xs md:text-sm font-medium ${activeCategory === 'film' ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-gray-300 bg-transparent'} rounded-lg hover:bg-gray-700 hover:text-blue-300 focus:z-10 focus:ring-2 focus:ring-blue-500 transition-colors duration-200 mx-1 flex-1 md:flex-none whitespace-nowrap`}
            >
              Films
            </button>
            <button 
              onClick={() => handleCategoryChange('tv')}
              className={`px-3 md:px-5 py-2 text-xs md:text-sm font-medium ${activeCategory === 'tv' ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-gray-300 bg-transparent'} rounded-lg hover:bg-gray-700 hover:text-blue-300 focus:z-10 focus:ring-2 focus:ring-blue-500 transition-colors duration-200 mx-1 flex-1 md:flex-none whitespace-nowrap`}
            >
              TV Series
            </button>
            <button 
              onClick={() => handleCategoryChange('music')}
              className={`px-3 md:px-5 py-2 text-xs md:text-sm font-medium ${activeCategory === 'music' ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-gray-300 bg-transparent'} rounded-lg hover:bg-gray-700 hover:text-blue-300 focus:z-10 focus:ring-2 focus:ring-blue-500 transition-colors duration-200 mx-1 flex-1 md:flex-none whitespace-nowrap`}
            >
              Music Videos
            </button>
            <button 
              onClick={() => handleCategoryChange('ad')}
              className={`px-3 md:px-5 py-2 text-xs md:text-sm font-medium ${activeCategory === 'ad' ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-gray-300 bg-transparent'} rounded-lg hover:bg-gray-700 hover:text-blue-300 focus:z-10 focus:ring-2 focus:ring-blue-500 transition-colors duration-200 mx-1 flex-1 md:flex-none whitespace-nowrap`}
            >
              Commercials
            </button>
          </div>
        </div>
        

        
        {/* Kashmir Files Project (featured version) */}
        {(activeCategory === 'all' || activeCategory === 'film') && kashmirFilesProject && (
          <div className="mb-16 bg-gradient-to-r from-blue-200/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/50 transition-all duration-300 border border-blue-500/30 transform hover:scale-[1.02]">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Enhanced image section with larger size */}
              <div className="lg:w-2/5 relative overflow-hidden h-60 sm:h-72 md:h-80 lg:h-auto w-full">
                <img src={kashmirFilesProject.image} alt={kashmirFilesProject.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter saturate-120" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 opacity-50"></div>
                <div className="absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-blue-50 rounded-full text-sm font-semibold">Featured Film</div>
              </div>
              
              {/* Enhanced content section with better spacing and typography */}
              <div className="lg:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between bg-gradient-to-br from-gray-900/95 to-gray-800/95">
                <div>
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4 md:mb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{kashmirFilesProject.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 w-full lg:w-auto">
                      <a
                        href={kashmirFilesProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 md:px-5 py-2 md:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 group font-medium text-sm md:text-base flex-1 lg:flex-none justify-center"
                      >
                        Watch Trailer
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <button
                        onClick={() => navigate('/kashmirFiles')}
                        className="inline-flex items-center bg-transparent border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-600 px-4 md:px-5 py-2 md:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group font-medium text-sm md:text-base flex-1 lg:flex-none justify-center"
                      >
                        More Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg mb-4 md:mb-6 leading-relaxed line-clamp-3">{kashmirFilesProject.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg border border-blue-500/20">
                      <p className="text-gray-300">
                        <strong className="text-blue-300 block text-base md:text-lg mb-1 md:mb-2">Location</strong>
                        {kashmirFilesProject.location}
                      </p>
                    </div>
                    <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg border border-blue-500/20">
                      <p className="text-gray-300">
                        <strong className="text-blue-300 block text-base md:text-lg mb-1 md:mb-2">Release Date</strong>
                        {kashmirFilesProject.releaseDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.03] border border-blue-600/10">
              <div className="relative overflow-hidden h-40 sm:h-48 md:h-52">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 filter saturate-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-blue-900/20 to-transparent opacity-70"></div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md shadow-blue-600/30"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Button */}
        {filteredProjects.length > visibleProjects && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={handleShowMore}
              className="bg-transparent border border-blue-500 text-blue-400 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-indigo-900/30 font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center shadow-md hover:shadow-blue-500/30 hover:border-blue-400"
            >
              Show More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
        
        {/* View All Projects Link */}
        <div className="text-center mt-10">
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-blue-400 hover:text-blue-300 font-medium underline transition-colors duration-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent"
          >
            Contact Us For More Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection