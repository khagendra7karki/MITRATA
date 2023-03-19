import React from 'react'
import { useNavigate } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";
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

export default function Notification({display}) {
  const navigate = useNavigate()
  if( display & 32){
  return (
 
    <Grid container  sx ={{ width: '40vh',height: '40vh', bgcolor:'#242629', borderRadius:'18px'}} >
    <List sx={{
            margin:'0px',
            width: "100%",
            maxWidth:'40vh',
            padding: '1px'
          }}>
    <ListItem sx={{bgcolor:' #b8c9e3',display: 'flex', borderRadius:'15px 15px 0 0',
    flexDirection: 'column',
    height:'7vh',
    overflow: 'auto',
    margin: '0px',
    padding: '10px'}} >
      <Grid container>
        
        <Grid item xs={12}>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%" }} ><b><h4>My account</h4></b></ListItemText>
   
   </Grid >
  
   
      </Grid>
    </ListItem>
    <Divider/>
    <ListItem sx={{bgcolor:'#b8c9e3',display: 'flex',
    flexDirection: 'column',
    height:'21vh',
    overflow: 'auto',
    margin: '0px',
    padding: '20px'}} >
      <Grid container sx={{height:'7vh'}}>
        
        <Grid item xs={9}>
        <Grid item xs={12}>
          
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}>Username</ListItemText>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}><b>Kripesh Nihure</b></ListItemText>
          </Grid>
   </Grid >
   <Grid item xs={3}><Button variant="outlined">Change</Button></Grid>
   
      </Grid>
      <Grid container sx={{height:'7vh'}}>
        
        <Grid item xs={9}>
        <Grid item xs={12}>
        <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}>Email</ListItemText>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}><b>Kripesh@gmail.com</b></ListItemText>
          </Grid>
   </Grid >
   <Grid item xs={3}><Button variant="outlined">Change</Button></Grid>
   
      </Grid>
      <Grid container sx={{height:'7vh'}}>
        
        <Grid item xs={9}>
        <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}>Password</ListItemText>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}><b>**********</b></ListItemText>
         
   </Grid >
   <Grid item xs={3}><Button variant="outlined">Change</Button></Grid>
   
      </Grid>
    </ListItem>
    <Divider/>
    <ListItem sx={{bgcolor:'#b8c9e3',display: 'flex', borderRadius:'0 0 15px 15px',
    flexDirection: 'column',
    height:'12vh',
    overflow: 'auto',
    margin: '0px',
    padding: '20px'}} >
      <Grid container>
        
        <Grid item xs={8}>
        <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}>Close account</ListItemText>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}><b>have a good day</b></ListItemText>
   
   </Grid >
   <Grid item xs={4}><Button onClick={()=>{navigate('/login')}} variant="contained">Log out</Button></Grid></Grid>
   
     
    </ListItem>
    </List>
    </Grid>
   
 
    
    )}
    return<>
    </>
  
}
