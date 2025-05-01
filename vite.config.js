import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    splitVendorChunkPlugin(), // Split vendor chunks for better caching
  ],
  build: {
    // Optimize build output
    cssCodeSplit: true,
    reportCompressedSize: false, // Faster builds
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large dependencies into separate chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'], // Pre-bundle these dependencies
  },
  server: {
    hmr: true, // Enable hot module replacement
  },
})
