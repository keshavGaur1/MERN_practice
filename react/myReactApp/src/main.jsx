import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />   {/* sabse phele ise hi render kra jata h */}
    
  </StrictMode>,
)
