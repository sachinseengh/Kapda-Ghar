import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Customer/Components/Navigations/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage'
import Footer from './Customer/Components/Footer/Footer'
import Product from './Customer/Components/Product/Product'
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails'
import CartItem from './Customer/Components/Cart/CartItem'

function App() {


  return (
    
    
    <div>  
      
      
       <Navigation></Navigation>
       <div>
        {/* <HomePage></HomePage> */}
        {/* <Product></Product> */}
        {/* <ProductDetails></ProductDetails> */}
        <CartItem></CartItem>
       </div>

       <Footer></Footer>
       
       </div>
    
    
    
  
  )
}

export default App
