

// src/main.tsx
import { createRoot } from 'react-dom/client'
import App from './App'

const el = document.getElementById('root') // must match index.html
if (!el) throw new Error('Root element not found')
createRoot(el).render(<App />)