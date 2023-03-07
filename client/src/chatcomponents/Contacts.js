/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import React, {useState, useEffect} from 'react'
import { css } from '@emotion/react';

import { List, ListItem,Typography, ListItemIcon, ListItemText,Avatar,Grid} from '@mui/material'


const  Contacts=({socket,changeChat})=> {
    const [users, setUsers] = useState([])
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const data = JSON.parse(
        localStorage.getItem("chat-app-user")
      ).userEmail
    useEffect(()=> {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

    const changeCurrentChat = (user,index)=>{
    changeChat(user)
    setCurrentSelected(index);
        console.log("i am in the contacts" , user)  
    }
    const contactts = css` display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin: 5px 0;
    background-color: #455a64;
    padding: 20px;
    `
  return (
    <Grid item xs={3} sx={{height:'90vh',display:'flex', flexDirection: 'column',borderRight: '1px solid #e0e0e0',background: '#A9b0b0', borderRadius:'18px' }}>
        <Grid item  style={{padding: '10px',height:'10px'}} xs={12} >
            <Typography variant="h3" className="header-message">Chat</Typography>
        </Grid>
        <Grid item xs={12} >
            <List sx ={{ width: '100%', maxWidth: 360,height: '70vh', overflowY: 'auto'}} >
                
            {users.map((user,index) =>  
                ((user.email !== data) &&
                <ListItem button key={user.socketID} onClick={() => changeCurrentChat(user,index)} css = {css` ${contactts}`} >
                    {/* <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon> */}
                    <ListItemText primary={`${user.email}`}></ListItemText>
                    {/* <ListItemText secondary="online" align="right"></ListItemText> */}
                </ListItem>
                )

        )}
              
            </List>
            <Grid container css={css`background-color: #516653; padding: 20px; margin: 2;border-bottom-right-radius: 18px;
border-bottom-left-radius: 18px; `}>
            <List sx={{ width: '100%', maxWidth: 360, alignItems:'buttom' }}>   
                <ListItem button key="RemySharp">
                    <ListItemIcon>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon>
                    <ListItemText  primary={`${JSON.parse(
            localStorage.getItem("chat-app-user")
          ).userEmail}`}></ListItemText>
                </ListItem>
            </List>
            </Grid>

        </Grid>
        </Grid>
  )
}
export default Contacts