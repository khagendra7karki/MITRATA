import React from 'react'
<<<<<<< HEAD
import {
    Typography,
    Grid,
  } from "@mui/material";
import NotificationItem from './NotificationItems';
  export default function Notification({ display, notifications , setUser, addFriend, rejectNotification }) {
    const handleAccept = ( targetNotification  ) =>{
        setUser( ( prev ) =>{
          return { ...prev, notification: notifications.filter( notification => notification.email != targetNotification.email )}
        })
        addFriend( targetNotification.email, targetNotification.image, targetNotification.name)
    }
    const handleDecline = (targetNotification ) =>{
      setUser( ( prev ) =>{
        return { ...prev, notification: notifications.filter( notification => { return notification.email != targetNotification.email} )}
      })
      rejectNotification( targetNotification.email )
    }
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
                      return <NotificationItem notification = { notification } handleAccept = { handleAccept } handleDecline = { handleDecline } />
                    } )}
                  </>
              }
                return <>
                </>
            })()  }
            </Grid>
        </Grid>
=======
import { useState } from 'react'; 
import {
    List,
    ListItem,
    Typography,
    ListItemIcon,
    ListItemText,
    Avatar,Button,
    Grid,
    Divider,
  } from "@mui/material";
export default function Notification() {
  const [notify,SetNotify] = useState('')
  function acceptedFunc(){
    
  }
  function rejectedFunc(){

  
  }

  return (
    <>
    <Grid container  sx ={{ width: '50vh',height: '65vh', bgcolor:'#b0b0b0', borderRadius:'50px', display:'flex'}} >
    <Typography variant="h8" sx={{padding:'10px 50px 0px '}} className="header-message">
          Notification
        </Typography>
    <Grid container  sx ={{positon:'absolute', margin:'0px 5px 40px  ', width: '50vh',height: '60vh', bgcolor:'#242629', borderRadius:'50px'}} >
    <Grid item style={{ padding: "10px", height: "10px" }} xs={12}>
        
      
    <List sx={{
            margin:'auto',
            width: "100%",
            maxWidth:425,
            
            height: "55vh",
           
          }}>
    <ListItem sx={{bgcolor:'#b8c9e3',display: 'flex', borderRadius:'15px',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
    margin: '5px 5px',
    padding: '20px'}}>
      <Grid container>
        <Grid item xs={2}><ListItemIcon>
                <Avatar  sx={{ width: 56, height: 56 }}
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon></Grid>
        <Grid item xs={10}>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}><b>Sasha Obama</b></ListItemText>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%" }}>Would you be my friend ?</ListItemText>
   
   </Grid >
   <Grid container sx={{display:'flex' , width: "100%", flexDirection: 'row',
    alignItems: 'center',  }}>
   
   <Button variant="contained" sx={{margin :'1px 5px 0px 160px'}} onClick={acceptedFunc}>Accept</Button>
    <Button variant="outlined"sx={{  }} onClick={rejectedFunc}>Reject</Button>


   </Grid>
   
      </Grid>
      
         </ListItem>
    <ListItem sx={{bgcolor:'#b8c9e3',display: 'flex', borderRadius:'15px',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
    margin: '5px 5px',
    padding: '20px'}}>
      <Grid container>
        <Grid item xs={2}><ListItemIcon>
                <Avatar  sx={{ width: 56, height: 56 }}
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon></Grid>
        <Grid item xs={10}>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}><b>Sasha Obama</b></ListItemText>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%" }}>Would you be my friend ?</ListItemText>
   
   </Grid >
   <Grid container sx={{display:'flex' , width: "100%", flexDirection: 'row',
    alignItems: 'center',  }}>
   
   <Button variant="contained" sx={{margin :'1px 5px 0px 160px'}} onClick={acceptedFunc}>Accept</Button>
    <Button variant="outlined"sx={{  }} onClick={rejectedFunc}>Reject</Button>


   </Grid>
   
      </Grid>
      
         </ListItem>
    
 
    </List>
    
    </Grid>
    </Grid>
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
    </Grid>
    
    </>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
