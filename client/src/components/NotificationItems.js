import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,Button,
    Grid,
  } from "@mui/material";

import { useState } from 'react'

//css
import '../assets/css/notification.css'
const NotificationItem = ({image, content}) =>{
  console.log(  image )
    // const [notify,SetNotify] = useState('')
    // console.log( ' i habe been called to disla')
  function acceptedFunc(){
    console.log( 'notification has been accepted')
    
  }
  function rejectedFunc(){
    console.log( 'notification has been rejected')  
  }
    return <>
        <List sx={{
            margin:'auto',
            width: "100%",
            maxWidth:425,
          }}>
    <ListItem sx={{bgcolor:'#b8c9e3',display: 'flex', borderRadius:'15px',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
    margin: '2.5px 2.5px',
    padding: '20px'}} className = 'notification-item'>
      <Grid container>
        <Grid item xs={2}><ListItemIcon>
                <Avatar  sx={{ width: 56, height: 56 }}
                  alt="Remy Sharp"
                  src={ image }
                />
              </ListItemIcon></Grid>
        <Grid item xs={10}>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}><b>{`${content}`}</b></ListItemText>
   
   </Grid >
   <Grid container sx={{display:'flex' , width: "100%", flexDirection: 'row',
    alignItems: 'center'  }}>
   
   <Button variant="contained" sx={{margin :'1px 5px 0px 160px'}} onClick={acceptedFunc}>Accept</Button>
    <Button variant="outlined" onClick={rejectedFunc}>Reject</Button>


   </Grid>
   
      </Grid>
         </ListItem>
    </List>
    </>
}

   
export default NotificationItem