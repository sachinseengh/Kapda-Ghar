import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {

  const navigate = useNavigate();
  const handleOrderSummary=()=>{
    navigate('/checkout?step=3')
  }


const handleSubmit=(e)=>{
    e.preventDefault();
    const data =new FormData(e.currentTarget);

    const address={
        firstName:data.get("firstName"),
        lastName:data.get("lastName"),
        address:data.get("address"),
        city:data.get("city"),
        state:data.get("state"),
        state:data.get("postalCode"),
        phone:data.get("phone"),
    }

    console.log("address",address);
    

}


  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard></AddressCard>
            <Button
              sx={{ mt: 2, bgcolor: "rgb(79,70,229)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit} >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="first name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="last name"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="address"
                    multiline
                    rows={3}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="city"
                    
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="state"
                    
                  ></TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="postalCode"
                    name="postalCode"
                    label="Zip/postalCode"
                    fullWidth
                    autoComplete="shipping postal-code"
                    
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="phone"
                    
                  ></TextField>
                </Grid>
                <div className="w-full mt-4 mx-6">
                    <Button onClick={handleOrderSummary}  type="submit" variant="contained" sx={{bgcolor:"rgb(79,70,229)"}}> Deliver Here</Button>
                </div>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
