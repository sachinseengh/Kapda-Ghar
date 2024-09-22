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
import OrderDetails from './Customer/Components/Order/OrderDetails'
import CustomerRouters from './Routers/CustomerRouters'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

 return(
    
    <div>  
  <Routes>
     <Route path='/' element={<CustomerRouters></CustomerRouters>}>
        </Route>
     
        </Routes>
   
        
     
        </div>
  )
}

export default App
