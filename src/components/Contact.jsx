import React from 'react'
import Header from './Header'
const Contact = () => {
  return (
    <>
    <Header />
      
    <div className="min-h-screen mt-4">
      <h1 className="text-4xl font-bold text-black text-center py-8 px-4 bg-white/70 backdrop-blur-sm rounded-lg max-w-4xl mx-auto">We Believe In Connecting Filmmakers With The Perfect Locations</h1>
      <p className="text-center text-black  max-w-4xl mx-auto font-bold px-4 mb-8 bg-green-300/50 backdrop-blur-sm rounded-lg mt-4">
        We are a team of experienced filmmakers and production professionals who are dedicated to providing the best possible service to our clients.
      </p>
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-4xl mx-auto bg-gray-400/95 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-8">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h2 className="text-4xl font-semibold text-black text-center mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg ">
                  <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                    <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                    Office Address
                  </h3>
                  <p className="text-gray-900 text-sm sm:text-base pl-7">
                    123 Mall Road<br />
                    Mussoorie, Uttarakhand<br />
                    India - 248179
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg ">
                  <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                    <i className="fas fa-address-book mr-2 text-blue-600"></i>
                    Contact Info
                  </h3>
                  <div className="text-gray-800 text-sm sm:text-base pl-7 space-y-2">
                    <a href="tel:+918433438609" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-fit">
                      <i className="fas fa-phone mr-2"></i>
                      Call Us: +91 98765 43210
                    </a>
                    <a href="mailto:info@uttarakhandfilms.com" className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-fit">
                      <i className="fas fa-envelope mr-2"></i>
                      Email Us
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                    <i className="fas fa-share-alt mr-2 text-blue-600"></i>
                    Social Media
                  </h3>
                  <div className="space-y-3 pl-7">
                    <a 
                      href="https://www.instagram.com/uttarakhandfilms" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded hover:from-purple-600 hover:to-pink-600 transition w-fit"
                    >
                      <i className="fab fa-instagram text-xl mr-2"></i>
                      <span>Follow on Instagram</span>
                    </a>
                    <a
                      href="https://www.facebook.com/uttarakhandfilms" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-fit"
                    >
                      <i className="fab fa-facebook text-xl mr-2"></i>
                      <span>Like on Facebook</span>
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                    <i className="far fa-clock mr-2 text-blue-600"></i>
                    Business Hours
                  </h3>
                  <div className="text-gray-800 text-sm sm:text-base pl-7">
                    <p className="flex items-center mb-1">
                      <span className="font-medium w-32">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex items-center mb-1">
                      <span className="font-medium w-32">Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium w-32">Sunday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact