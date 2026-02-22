import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import type { OutputAsset } from 'rollup'

// Inline all CSS into the HTML <head> as a <style> tag.
// Eliminates the render-blocking stylesheet network round-trip (~160ms).
// At ~20KB (4.8KB gzip) the stylesheet is small enough that inlining
// is a net win over a separate HTTP request.
function inlineCss(): Plugin {
  let css = ''
  return {
    name: 'inline-css',
    apply: 'build',
    generateBundle(_, bundle) {
      for (const [key, chunk] of Object.entries(bundle)) {
        if (key.endsWith('.css')) {
          css += (chunk as OutputAsset).source as string
          delete bundle[key]
        }
      }
    },
    transformIndexHtml(html) {
      // Remove any <link rel="stylesheet"> tags Vite injected
      html = html.replace(/<link[^>]+rel="stylesheet"[^>]*>\s*/g, '')
      // Inject inline styles just before </head>
      return html.replace('</head>', `<style>${css}</style>\n</head>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineCss()],
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
    // Prevent font files being inlined into the JS bundle
    assetsInlineLimit: 0
  },
  // Optimize dependencies for faster mobile loads
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})

