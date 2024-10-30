import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './assets/scss/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HelmetProvider>
          <App />
      </HelmetProvider>
  </StrictMode>,
)
