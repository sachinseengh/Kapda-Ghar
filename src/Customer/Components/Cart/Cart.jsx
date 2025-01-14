import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate =useNavigate();

const {cart}=useSelector((store)=>store);


  const dispatch=useDispatch();
  const handleCheckout=()=>{
  navigate(`/checkout?step=2`);
  }



useEffect(()=>{
         dispatch(getCart());
},[])



  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-12 ">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item)=><CartItem item={item} />)}
          
        </div>

        <div className="  px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className=" shadow-lg border px-5 rounded-md">
            <p className="uppercase font-bold opacity-60 pb-4 pt-5">Price Details</p>
            <Divider ></Divider>

            <div className="space-y-3 font-semibold pt-1">
              <div className="flex justify-between pt-1 text-black">
                <p>Price</p>
                <p className="text-green-500">Rs {cart.cart?.totalPrice}</p>
              </div>

              <div className="flex justify-between pt-1 text-black">
                <p>Discount</p>
                <p className="text-green-500">Rs -{cart.cart?.discount}</p>
              </div>

              <div className="flex justify-between pt-1 pb-3 text-black">
                <p>Delivery Charges</p>
                <p className="text-green-500">Free</p>
              </div>
            </div>
            <Divider></Divider>
            <div className="flex justify-between pt-2 text-black">
                <p className="font-bold">Total Amount</p>
                <p className="font-bold text-green-500">Rs {cart.cart?.totalDiscountedPrice}</p>
              </div>
              <div className="mt-4 mb-4">
                <Button onClick={handleCheckout} className="uppercase mx-auto w-full" sx={{bgcolor:"rgb(160,118,253)",color:"white"}}>check out</Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
