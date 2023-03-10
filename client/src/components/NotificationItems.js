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

import { useState } from 'react'
const NotificationItem = () =>{
    const [notify,SetNotify] = useState('')
  function acceptedFunc(){
    
  }
  function rejectedFunc(){

  
  }
    return <>
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
    </>
}

   
export default NotificationItem