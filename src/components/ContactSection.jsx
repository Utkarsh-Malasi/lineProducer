import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex flex-wrap">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Office Address</h4>
                    <p className="text-gray-600 mt-1">
                      WoodStock <br />
                      Mussoorie, Uttarakhand<br />
                      India - 248179
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <i className="fas fa-phone text-blue-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                    <a href="tel:+919876543210" className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-2">
                      <i className="fas fa-phone text-2xl mr-3"></i>
                      <span className="font-medium">+91 8433438609</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <i className="fas fa-envelope text-blue-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <a href="mailto:info@uttarakhandfilms.com" className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-2">info@akfilmsandproductions.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <i className="fas fa-clock text-blue-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Business Hours</h4>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-blue-600 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
              <p className="mb-6">Follow us on social media for updates on our latest projects and behind-the-scenes content.</p>
              
              <div className="space-y-6">
                <a 
                  href="https://www.instagram.com/akfilmsandproductions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <i className="fab fa-instagram text-2xl mr-3"></i>
                  <span className="font-medium">Follow on Instagram</span>
                </a>
                
                <a 
                  href="https://www.facebook.com/akfilmsandproductions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <i className="fab fa-facebook text-2xl mr-3"></i>
                  <span className="font-medium">Like on Facebook</span>
                </a>
                
                <a 
                  href="https://www.youtube.com/channel/akfilmsandproductions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <i className="fab fa-youtube text-2xl mr-3"></i>
                  <span className="font-medium">Subscribe on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection