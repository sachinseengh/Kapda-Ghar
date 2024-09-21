import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 mb-3 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h=[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://t3.ftcdn.net/jpg/04/83/25/50/360_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-bold ">Men Slim Rise Black Jeans</p>
          <p className="opacity-50">Size : L,white</p>
          <p className="opacity-50">Seller: Crishtaliyo 2 Fashion</p>

          <div className="flex gap-2">
            <p className="opacity-50 line-through">Rs 199</p>
            <p className="font-semibold">Rs.157</p>
            <p className="text-green-600 font-semibold">72%off</p>
          </div>
        </div>

        <div className="lg:flex items-center lg:space-x-10 pt-4"></div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4 ">
        <div className="flex items-center space-x-2">
          <IconButton sx={{color:"RGB(145 85 253)"}}>
            <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">5</span>
          <IconButton sx={{color:"RGB(145, 85, 253)"}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
