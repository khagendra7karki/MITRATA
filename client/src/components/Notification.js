import React from 'react'
import {
    Typography,
    Grid,
  } from "@mui/material";
import NotificationItem from './NotificationItems';
  export default function Notification({ display, notifications }) {
    // console.log( notifications )
  return (
    <>
    <Grid container  sx ={{ width: '50vh',height: '65vh', bgcolor:'#b0b0b0', borderRadius:'50px', display: `${ display & 16 ? 'flex': 'none'}` }} >
    <Typography variant="h5" sx={{ m : 'auto' , padding:'10px 50px 0px '}} className="header-message">
          Notification
        </Typography>
        <Grid container  sx ={{positon:'absolute', margin:'0px 5px 40px  ', width: '50vh',height: '60vh', bgcolor:'#242629', borderRadius:'50px'}} >
            <Grid item style={{ padding: "10px", height: "10px" }} xs={12}>
                
            
            { (() =>{
              if (notifications) {
                  return <>
                  {  notifications.map( notification =>{
                      return <NotificationItem image = { notification.image } content = { notification.content } />
                    } )}
                  </>
              }
                return <>
                </>
            })()  }
            </Grid>
        </Grid>
    </Grid>
    
    </>
  )
}