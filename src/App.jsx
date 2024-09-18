import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Customer/Components/Navigations/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage'
import Footer from './Customer/Components/Footer/Footer'

function App() {


  return (
    
    
    <div>  
      
      
       <Navigation></Navigation>
       <div>
        <HomePage></HomePage>
       </div>
       <Footer></Footer>
       
       </div>
    
    
    
  
  )
}

export default App
