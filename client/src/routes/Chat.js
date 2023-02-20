import * as React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Avatar,Grid,Paper, Typography, TextField ,Divider} from '@mui/material'
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

function chatApp() {
  return (
    <div >
    
    
    <Grid container component={Paper} sx ={{ width: '100vh',height: '90vh',}}>
    
    <Grid item  style={{padding: '10px'}} xs={3} sx={{ borderRight: '1px solid #e0e0e0', background: '#647066'}}>
            <Typography variant="h3" className="header-message">Chat</Typography>
    </Grid>
       
     <Grid item xs={9} style={{padding: '10px'}} sx={{ borderRight: '1px solid #e0e0e0', background: '#d13dbb'}}>
            <Typography sx={{width:'200px'}} variant="h5" className="header-message">Alice<CloseIcon align="right" sx={{ borderRight: '1px solid #e0e0e0', background: '#647066'}}/></Typography>
            
           </Grid>
          
 
   
        <Grid item xs={3} sx={{ borderRight: '1px solid #e0e0e0', background: '#647066'}}>
        {/* <Divider />
            <Grid item xs={12} style={{padding: '10px'}}>
                <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
            </Grid>
            <Divider /> */}
      
            <List sx ={{ height: '70vh', overflowY: 'auto'}}>
                <ListItem button key="RemySharp">
                    <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon>
                    <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                    <ListItemText secondary="online" align="right"></ListItemText>
                </ListItem>
                <ListItem button key="Alice">
                    <ListItemIcon>
                        <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </ListItemIcon>
                    <ListItemText primary="Alice">Alice</ListItemText>
                </ListItem>
                
                
                <ListItem button key="CindyBaker">
                    <ListItemIcon>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    </ListItemIcon>
                    <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                </ListItem>
            </List>
            <Grid container style={{padding: '20px'}} >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignItems:'buttom' }}>   
                <ListItem button key="RemySharp">
                    <ListItemIcon>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon>
                    <ListItemText primary="Iamloggedin"></ListItemText>
                </ListItem>
            </List>
            </Grid>

        </Grid>

        {/* chat-container */}
        <Grid item xs={9} sx={{ borderRight: '1px solid #e0e0e0', background: '#d13dbb'}}>
            
            <List sx ={{ height: '70vh', overflowY: 'auto'}}>
                <ListItem key="1">
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" secondary="09:30"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem key="2">
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="left" secondary="09:31"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
                
                <ListItem key="3">
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" secondary="10:30"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
            <Divider />
            <Grid container style={{padding: '20px'}}>
                <Grid item xs={11}>
                    <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                </Grid>
                <Grid xs={1} align="right">
                    <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  </div>



  );
}

export default chatApp;
