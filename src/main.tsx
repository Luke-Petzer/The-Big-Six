import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'

// Defer React mount to first idle tick so the browser can complete
// initial paint + image decode before running Framer Motion's JS chunk.
// setTimeout fallback covers Safari (no requestIdleCallback support).
const mountApp = () => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(mountApp, { timeout: 200 })
} else {
  setTimeout(mountApp, 0)
}
