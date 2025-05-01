import React from 'react'

const AboutSection = ({ founderImage }) => {
  return (
    <section id="about" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/3 flex flex-col items-center">
              <img 
                src={founderImage} 
                alt="Founder" 
                className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">Ashish Kanojia</h3>
              <p className="text-gray-600 text-sm mb-2 text-center">Founder & CEO of AK Films & Production</p>
              <p className="text-gray-600 text-sm text-center">
                Line Producer with 7+ years of experience in Film & TV Production
              </p>
            </div>
            
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                Welcome to AK Films & Productions, your premier destination for discovering and securing the perfect filming locations in the breathtaking state of Uttarakhand, India.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                We are dedicated to showcasing the diverse and stunning landscapes of Uttarakhand to filmmakers, producers, and content creators from around the world. Our mission is to facilitate seamless location scouting and management while promoting the rich cultural heritage and natural beauty of our region.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">What We Offer</h3>
              <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
                <li>Extensive database of unique filming locations</li>
                <li>Local expertise and location management</li>
                <li>Permit assistance and logistics support</li>
                <li>Connection with local talent and crew</li>
                <li>Comprehensive production support services</li>
              </ul>

              <p className="text-gray-700">
                "Having worked in the film industry for over a decade, I've witnessed firsthand the transformative power of finding the perfect location. Uttarakhand, with its diverse landscapes and rich cultural heritage, has always been close to my heart."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection