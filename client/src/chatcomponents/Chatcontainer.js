import React from 'react'
import {useState, useEffect} from 'react'
import { List, ListItem, ListItemText,Grid} from '@mui/material'
import Chatinput from './Chatinput'
// import { v4 as uuidv4 } from "uuid";
const Chatcontainer=({socket})=> {

const[chatMessages,setChatMessages] = useState([])


useEffect(()=> {
    socket.on("messageResponse", data => setChatMessages([...chatMessages, data]))
    console.log(chatMessages)
  }, [socket, chatMessages])




  return (
    <Grid item xs={9} sx={{ borderRight: '1px solid #e0e0e0', background: '#d13dbb'}}>
            
            <List sx ={{ height: '70vh', overflowY: 'auto'}}>
            
         {chatMessages.map((message) => {return(
            
        message.name === JSON.parse(
            localStorage.getItem("chat-app-user")
          ).userEmail
        ?
        (<ListItem key={message.id}>
        <Grid container>
            <Grid item xs={12}>
                <ListItemText align="right" primary={`${message.text}`}></ListItemText>
            </Grid>
            {/* <Grid item xs={12}>
                <ListItemText align="right" secondary="10:30"></ListItemText>
            </Grid> */}
        </Grid>
        </ListItem>)
        :
        (<ListItem key={message.id}>
            <Grid container>
                <Grid item xs={12}>
                    <ListItemText align="left" primary={`${message.text}`}></ListItemText>
                </Grid>
                {/* <Grid item xs={12}>
                    <ListItemText align="right" secondary="10:30"></ListItemText>
                </Grid> */}
            </Grid>
            </ListItem>)
                )
    })}
               
            </List>
           
           <Chatinput  socket={socket} />
        </Grid>
    
  )
}
export default Chatcontainer
