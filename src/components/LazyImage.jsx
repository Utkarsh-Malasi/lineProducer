import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, placeholderClassName, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers that don't support IntersectionObserver
      setIsInView(true);
      return;
    }

    // Create an Intersection Observer to detect when the image is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // When the image enters the viewport, set isInView to true
        if (entries[0].isIntersecting) {
          setIsInView(true);
          // Once we've started loading the image, we can disconnect the observer
          observer.disconnect();
        }
      },
      // Increased rootMargin for better perceived performance - load images before they enter viewport
      { rootMargin: '300px 0px', threshold: 0.01 }
    );

    // Start observing the image element
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Clean up the observer when component unmounts
    return () => {
      if (imgRef.current && observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Handle image load event
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true); // Consider it "loaded" to remove the loading placeholder
  };

  return (
    <div 
      ref={imgRef} 
      className={`${className || ''} overflow-hidden`}
      style={{ width: width || '100%', height: height || 'auto' }}
      aria-label={alt} // For accessibility
    >
      {/* Show a placeholder until the image is loaded */}
      {!isLoaded && (
        <div 
          className={`${placeholderClassName || 'bg-gray-200 animate-pulse-slow'} w-full h-full`}
          style={{ minHeight: '100px' }} // Ensure placeholder has minimum height
          aria-hidden="true"
        />
      )}
      
      {/* Only start loading the image when it's in view */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 w-full h-full object-cover`}
          onLoad={handleImageLoaded}
          onError={handleImageError}
          loading="lazy" // Native lazy loading as fallback
          decoding="async" // Hint to browser to decode the image asynchronously
        />
      )}

      {/* Show fallback for image load errors */}
      {hasError && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;