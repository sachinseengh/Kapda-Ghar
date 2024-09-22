import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="shadow-md p-5">
        <h1 className="font-bold text-xl py-5">Delivery Address</h1>
        <AddressCard></AddressCard>
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3}></OrderTracker>
      </div>

      <Grid className=" space-y-10" container>
      { [1,1,1,1,1,1].map((item) =>   <Grid
          item
          container
          className="shadow-xl hover:shadow-slate-400 rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
       <Grid item xs={6}>
            <div className="flex items-center space-x-8">
              <img
                src="https://t3.ftcdn.net/jpg/04/83/25/50/360_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg"
                alt=""
                className="w-[5rem] h-[5rem] object-cover object-top"
              />
              <div>
                <p className="font-semibold">Men Slim Trim Fit and Fat</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color:pink</span><span>Size:M</span></p>
                <p>Seller: Linaria</p>
                <p>Rs 1585</p>
              </div>
            </div>
          </Grid>
         <Grid item >
            <Box sx={{color:deepPurple[500]}}>
                <StarBorderIcon sx={{fontSize:"2.5rem"}} className="px-2 ">
                  
                </StarBorderIcon>
                <span>Rate & Review Product</span>

            </Box>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
};

export default OrderDetails;
