import React from 'react'

const LoginForm = () => {


    const handleSubmit=(event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
    
        const userData={
            firstName:data.get("firstName"),
            secondName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
    
        }
        console.log(userData);
        }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                
                <Grid item xs={12}>
                    <TextField required
                    id='email'
                    name='email'
                    label='Email'
                    fullWidth
                    autoComplete='email'></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField required
                    id='password'
                    name='password'
                    label='Password'
                    fullWidth
                    autoComplete='password'></TextField>
                </Grid>

                <Grid item xs={12}>
                    <Button
                    className='bg-[#9155FD] w-full'
                    variant='contained'
                    type='submit'
                    size='large'
                    sx={{padding:".8rem 0",bgcolor:"#9155FD"}}>

                        Login
                        </Button>
                        </Grid>
            </Grid>
        </form>
    </div>
  )
}

export default LoginForm