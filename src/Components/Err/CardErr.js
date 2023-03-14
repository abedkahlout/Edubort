import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import "./StyleErr.css"
function CardErr() {
  return (
    <Stack direction='row' alignItems="center" justifyContent='center'>
        <Box className="cardERR" mt={5}>

            <Typography sx={{fontWeight:700 , color:"gray"}} variant='h1'>
              404
            </Typography>
            <Typography sx={{fontWeight:700}} variant='h5'>
              Page Not Found
            </Typography>
            <Typography variant='subtitle1'>
                The Link you clicked may be broken or the page may have been removed 
                or renamed 
            </Typography>
       
            
        </Box>
    </Stack>
  )
}

export default CardErr