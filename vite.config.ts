import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting for better caching and faster mobile loads
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion']
        }
      }
    },
    // Use esbuild for fast minification
    minify: 'esbuild',
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    // Target modern browsers for better optimization
    target: 'es2015'
  },
  // Optimize dependencies for faster mobile loads
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})
