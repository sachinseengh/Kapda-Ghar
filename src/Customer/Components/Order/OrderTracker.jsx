import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'


const steps =[
    "Placed",
    "Order Confirmed",
    "Out For Delivered",
    "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>

        <Stepper activeStep={activeStep} alternativeLabel>

{steps.map((label)=><Step>
    <StepLabel xs={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
</Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker