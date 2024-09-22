import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CustomerRouters from './Routers/CustomerRouters.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <CustomerRouters></CustomerRouters>
    
    </BrowserRouter>
  
  </StrictMode>,
)
