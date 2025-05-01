import React, { useState, useEffect } from 'react';

const CallButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Phone number from contact page
  const phoneNumber = '+918433438609';
  
  // Toggle animation effect every few seconds
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      
      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 3000);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
    >
      <a 
        href={`tel:${phoneNumber}`}
        className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ${isAnimating ? 'animate-pulse' : ''}`}
        aria-label="Call us"
      >
        <div className="relative">
          {/* Phone icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
            />
          </svg>
          
          {/* Ripple effect */}
          <span className="absolute -inset-0.5 rounded-full border-2 border-white animate-ping opacity-75"></span>
        </div>
      </a>
    </div>
  );
};

export default CallButton;