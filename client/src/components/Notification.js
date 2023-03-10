import React from 'react'
import {
    List,
    ListItem,
    Typography,
    ListItemIcon,
    ListItemText,
    Avatar,
    Grid,
    Divider,
  } from "@mui/material";
import NotificationItem from './NotificationItems';
  export default function Notification({ display }) {
  return (
    <>
    <Grid container  sx ={{ width: '50vh',height: '65vh', bgcolor:'#b0b0b0', borderRadius:'50px', display: `${ display & 16 ? 'flex': 'none'}`}} >
    <Typography variant="h8" sx={{padding:'10px 50px 0px '}} className="header-message">
          Notification
        </Typography>
        <Grid container  sx ={{positon:'absolute', margin:'0px 5px 40px  ', width: '50vh',height: '60vh', bgcolor:'#242629', borderRadius:'50px'}} >
            <Grid item style={{ padding: "10px", height: "10px" }} xs={12}>
                
            
            <NotificationItem />
            
            </Grid>
        </Grid>
    </Grid>
    
    </>
  )
}