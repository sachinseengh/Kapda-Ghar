import { Grid } from "@mui/material";
import React from "react";
import Adjust from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  const handleOrderDetails=()=>{
    navigate(`/account/order/${1}`);
  }
  return (
    <div className="shadow-md hover:shadow-2xl " onClick={handleOrderDetails}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between"}}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
        
          <img
            src="https://t3.ftcdn.net/jpg/04/83/25/50/360_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg"
            alt=""
            className="w-[5rem] h-[5rem] object-cover object-top"
          />
      
         <div className="ml-5">
                <p>Men Slim Mid Rise Black Jeans</p>
                <p className="opacity-50 text-xs font-semibold">Size: M</p>
                <p className="opacity-50 text-xs font-semibold">Color:Black</p>
         </div>

          </div>
        </Grid>
        <Grid item xs={2}>
            <p>Rs 1099</p>
        </Grid>
        <Grid item xs={4} className="flex">
            <Adjust sx={{width:"15px",height:"25px"}} className="text-green-600 mr-2 text-sm"></Adjust>
         {true && <div>
         <p>
            <span>Delivered on March 03 </span>
          </p>
          <p className="
          text-xs">Your Item has been delivered</p>
          </div>}
        
         {false && <p>
            <span>Expected Delivery on Mar 03</span>
          </p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
