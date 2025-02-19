import React from 'react'
import Header from './Header'
import founderImage from '../images/founder.jpg'
const Home = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-8 mt-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-black/50 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-lg mb-6">
            Welcome to Uttarakhand Film Locations, your premier destination for discovering and securing the perfect filming locations in the breathtaking state of Uttarakhand, India.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            We are dedicated to showcasing the diverse and stunning landscapes of Uttarakhand to filmmakers, producers, and content creators from around the world. Our mission is to facilitate seamless location scouting and management while promoting the rich cultural heritage and natural beauty of our region.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Extensive database of unique filming locations</li>
            <li>Local expertise and location management</li>
            <li>Permit assistance and logistics support</li>
            <li>Connection with local talent and crew</li>
            <li>Comprehensive production support services</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <p className="mb-6">
            With years of experience in the film industry and deep local knowledge, we understand the unique requirements of film productions. From pristine mountains and valleys to historic temples and vibrant urban locations, we help bring your creative vision to life in the perfect setting.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Hear it from our Founder</h2>
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-6">
            <div className="flex flex-col items-center lg:sticky lg:top-8 lg:w-1/3">
              <img 
                src={founderImage} 
                alt="Founder" 
                className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white mb-4"
              />
              <h3 className="text-xl font-bold">Ashish Kanaujia</h3>
              <p className="text-gray-200 text-sm mb-2">Founder & CEO Of Uttarakhand Films</p>
              <p className="text-gray-300 text-sm text-center">
                Line Producer with 10+ years of experience in Film & TV Production
              </p>
            </div>
            <div className="lg:w-2/3">
              <p className="mb-4">
                "Having worked in the film industry for over a decade, I've witnessed firsthand the transformative power of finding the perfect location. Uttarakhand, with its diverse landscapes and rich cultural heritage, has always been close to my heart. Through Uttarakhand Film Locations, we aim to not only simplify the location scouting process but also showcase the untapped potential of this beautiful state to the global film community."
              </p>
              <p>
                With a keen eye for detail and a talent for problem-solving, I have successfully overseen numerous projects from pre-production through post-production, delivering high-quality content on time and within budget.
              </p>
              <p className="mt-4">
                Throughout my career, I have collaborated with directors, producers, and other key personnel to bring creative visions to life. My ability to navigate the complexities of production management, from securing locations and permits to coordinating with vendors and managing crew members, has been instrumental in the successful execution of many projects.
              </p>
              <p className="mt-4">
                I pride myself on my ability to adapt to the ever-changing demands of the production environment, maintaining a calm and professional demeanor under pressure. My dedication to fostering positive working relationships and my commitment to excellence have earned me a reputation as a reliable and trustworthy line producer.
              </p>
              <p className="mt-4">
                Whether it's a feature film, television series, or commercial project, I am passionate about bringing stories to the screen and ensuring that every production runs smoothly and efficiently.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
