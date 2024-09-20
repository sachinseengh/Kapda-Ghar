import { Avatar, Box, Rating } from '@mui/material'
import { Grid } from '@mui/system'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container wrap="wrap" spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                </Box>

            </Grid> 

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p>Raam</p>
                        <p>April 5,2023</p>
                    </div>
                </div>

                <Rating value={4.5} name="half-rating" readOnly precision={.5}> </Rating>
                <p style={{ wordWrap: "break-word", maxWidth: "100%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
          </p>
            </Grid>

        </Grid>
    </div>
  )
}

export default ProductReviewCard