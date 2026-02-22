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
    // Target modern browsers with native ESM for smaller bundles
    target: 'es2020',
    // Prevent tiny assets (fonts etc.) being inlined into the JS bundle
    assetsInlineLimit: 0
  },
  // Optimize dependencies for faster mobile loads
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})
