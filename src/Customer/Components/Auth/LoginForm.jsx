import { useAccordion } from "@material-tailwind/react";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../State/Auth/Action";


const LoginForm = () => {

const dispatch = useDispatch();
const navigate = useNavigate();




// useEffect(()=>{
//   if(jwt){
//       dispatch(getUser(jwt))
//   }
  
// },[jwt,auth.jwt])



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData))
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              variant="contained"
              type="submit"
              size="large"
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>


      <div className="flex-col items-center flex justify-center" >
            <div className='py-3 flex items-center justify-center'>
                <p >Don't have an account?</p>
                <Button onClick={()=>navigate("/register")} className="ml-5" size="small">Register</Button>
            </div>
        </div>


    </div>
  );
};

export default LoginForm;
