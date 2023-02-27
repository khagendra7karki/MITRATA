import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {Grid, Typography} from '@mui/material'
export default function Head() {
  return (
    <Grid container >
    
    <Grid item  style={{padding: '10px'}} xs={3} sx={{ borderRight: '1px solid #e0e0e0', background: '#647066'}}>
            <Typography variant="h3" className="header-message">Chat</Typography>
    </Grid>
       
     <Grid item xs={9} style={{padding: '10px'}} sx={{ borderRight: '1px solid #e0e0e0', background: '#d13dbb'}}>
            <Typography sx={{width:'200px'}} variant="h5" className="header-message">Alice<CloseIcon align="right" sx={{ borderRight: '1px solid #e0e0e0', background: '#647066'}}/></Typography>
            
           </Grid>
    </Grid>
  )
}
