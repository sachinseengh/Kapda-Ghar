import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Customer/Components/Navigations/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage'
import Footer from './Customer/Components/Footer/Footer'
import Product from './Customer/Components/Product/Product'
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails'
import Cart from './Customer/Components/Cart/Cart'
import CheckOut from './Customer/Components/CheckOut/CheckOut'
import Order from './Customer/Components/Order/Order'

function App() {


  return (
    
    
    <div>  
      
      
       <Navigation></Navigation>
       <div>
        {/* <HomePage></HomePage> */}
        {/* <Product></Product> */}
        {/* <ProductDetails></ProductDetails> */}
        {/* <Cart></Cart> */}
        {/* <CheckOut></CheckOut> */}
        <Order/>
       </div>

       <Footer></Footer>
       
       </div>
    
    
    
  
  )
}

export default App
