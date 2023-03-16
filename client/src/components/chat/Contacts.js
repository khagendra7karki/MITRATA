import React, { useState, useEffect } from "react";

import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  Avatar,
  Grid,
} from "@mui/material";
const style ={
  cursor: 'pointer',
  '&:hover': {
    background: 'pink'
  }
}

const Contacts = ({ chatList, setActiveChat }) => {

  const handleClick = ( chatToBeActive) =>{
    setActiveChat( chatToBeActive )
  }
  return (
    <Grid
      item
      xs={4}
      sx={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #e0e0e0",
        background: "#F8F8FF",
        borderRadius: "0 18px 18px 0 ",
      }}
    >
      <Grid item style={{ padding: "10px", height: "10px" }} xs={12}>
        <Typography variant="h4" className="header-message" sx = {{textAlign: 'center'}}>
          <b>Chat</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            height: "50vh",
            overflowY: "auto",
          }}
        >
             {
              chatList.map(  ( chat, index ) => {
                return <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "auto",
                    backgroundColor: 'lightblue',
                    padding: "5px",
                    margin: '0px',
                    ...style
                  }}
                  key = { index }
                  onClick = {( e ) =>{ handleClick( chat )} }
                >
                  <Grid container>
                    <Grid item xs={5}>
                      <ListItemIcon>
                        <Avatar
                          sx={{ width: 45, height: 45 }}
                          alt="Remy Sharp"
                          src={ chat.image }
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={7} sx = {{ alignSelf: 'center'}}>
                        <Typography variant = 'h6'>
                          { chat.name }
                        </Typography>                   
                     </Grid>
                  </Grid>
                </ListItem>
              })
             }
        </List>
      </Grid>
    </Grid>
  )
}
export default Contacts