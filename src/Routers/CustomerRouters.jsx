import React from "react";
import HomePage from "../Customer/pages/HomePage/HomePage";
import Cart from "../Customer/Components/Cart/Cart";
import Navigation from '../Customer/Components/Navigations/Navigation'
import Footer from "../Customer/Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../Customer/Components/Product/Product";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails";
import CheckOut from "../Customer/Components/CheckOut/CheckOut";
import Order from "../Customer/Components/Order/Order";
import OrderDetails from "../Customer/Components/Order/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation></Navigation>
      </div>
      
        <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product></Product>}></Route>
        <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}></Route>

        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
      
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
        
        {/* <Route path="*" element={<HomePage></HomePage>}></Route> */}
        </Routes>
      
      <div>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default CustomerRouters;
