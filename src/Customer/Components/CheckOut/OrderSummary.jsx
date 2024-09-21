import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button, Divider } from '@mui/material'


const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard></AddressCard>
        </div>
        <div className="lg:grid grid-cols-3 lg:px-5 relative mt-12 ">
        <div className="col-span-2">
          <CartItem></CartItem>
          
        </div>

        <div className="px-10 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className=" shadow-lg border px-5 rounded-md">
            <p className="uppercase font-bold opacity-60 pb-4 pt-5">Price Details</p>
            <Divider ></Divider>

            <div className="space-y-3 font-semibold pt-1">
              <div className="flex justify-between pt-1 text-black">
                <p>Price</p>
                <p className="text-green-500">Rs 444</p>
              </div>

              <div className="flex justify-between pt-1 text-black">
                <p>Discount</p>
                <p className="text-green-500">Rs -555</p>
              </div>

              <div className="flex justify-between pt-1 pb-3 text-black">
                <p>Delivery Charges</p>
                <p className="text-green-500">Free</p>
              </div>
            </div>
            <Divider></Divider>
            <div className="flex justify-between pt-2 text-black">
                <p className="font-bold">Total Amount</p>
                <p className="font-bold text-green-500">Rs 1285</p>
              </div>
              <div className="mt-4 mb-4">
                <Button className="uppercase mx-auto w-full" sx={{bgcolor:"rgb(160,118,253)",color:"white"}}>check out</Button>
              </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default OrderSummary