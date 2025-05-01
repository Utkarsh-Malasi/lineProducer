/**
 * Utility functions for handling image paths in a way that works with Vercel deployment
 */

/**
 * Gets the correct path for an image in both development and production environments
 * @param {string} imageName - The image filename (e.g., 'heroxoom.jpg')
 * @returns {string} - The correct URL to the image
 */
export const getImageUrl = (imageName) => {
  // Check if we're in production (Vercel) by looking for the presence of window.location.hostname
  const isProduction = typeof window !== 'undefined' && 
    window.location.hostname !== 'localhost' && 
    window.location.hostname !== '127.0.0.1';

  // In production, use the /dist/dist/assets path pattern with the hashed filename
  // In development, use the imported image directly
  if (isProduction) {
    // For production, we need to handle the hashed filenames
    // Extract the base name without extension
    const baseName = imageName.replace(/\.[^/.]+$/, '');
    const extension = imageName.split('.').pop();
    
    // Return a URL that will work with our Vercel configuration
    // This assumes the image is in the assets directory with a hash in the filename
    return `/dist/assets/${baseName}-[hash].${extension}`;
  } else {
    // For development, we can use the direct import
    // This will be replaced by the actual import during build
    return `/src/images/${imageName}`;
  }
};

/**
 * A more robust approach that doesn't rely on filename pattern matching
 * This function should be used with imported images
 * @param {string|Object} image - Either an imported image or a string path
 * @returns {string} - The correct URL to the image
 */
export const getImagePath = (image) => {
  // If the image is already a string (URL), return it
  if (typeof image === 'string') {
    return image;
  }
  
  // For imported images in Vite, they become objects with a default property
  if (image && typeof image === 'object' && image.default) {
    return image.default;
  }
  
  // For other bundlers or configurations
  return image;
};