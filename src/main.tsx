import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes } from '@generouted/react-router/lazy'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
)
