import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CustomerRouters from './Routers/CustomerRouters.jsx'
import { Provider } from 'react-redux'
import { store } from './State/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <Provider store={store}>
    <App />
    </Provider>
   
    <CustomerRouters></CustomerRouters>
    
    </BrowserRouter>
  
  </StrictMode>,
)
