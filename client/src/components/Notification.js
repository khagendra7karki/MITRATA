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
export default function Notification({ display }) {
  return (
    <>
    <Grid container  sx ={{ width: '50vh',height: '65vh', bgcolor:'#b0b0b0', borderRadius:'50px', display: `${ display & 16 ? 'flex': 'none'}`}} >
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
            <ListItem sx={{bgcolor:'#b8c9e3',display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
            margin: '5px 5px',
            padding: '20px'}}>
                <ListItemText sx={{ overflowWrap: "break-word", width: "100%" }}>hello world hello world</ListItemText>
            </ListItem>
            <Divider/>
            <ListItem sx={{bgcolor:'#b8c9e3',display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
            margin: '5px 5px',
            padding: '20px'}}>
                <ListItemText sx={{ overflowWrap: "break-word", width: "100%" }}>hello world hello world</ListItemText>
            </ListItem>
            <Divider/>
            <ListItem sx={{bgcolor:'#b8c9e3',display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
            margin: '5px 5px',
            padding: '20px'}}>
                <ListItemText sx={{ overflowWrap: "break-word", width: "100%" }}>hello world hello world</ListItemText>
            </ListItem>
            <Divider/>
            </List>
            
            </Grid>
        </Grid>
    </Grid>
    
    </>
  )
}