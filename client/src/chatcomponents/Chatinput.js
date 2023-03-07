import React from 'react'
import {useState} from 'react'
import {Button} from '@mui/material';
// import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import { Grid,TextField } from '@mui/material'
export default function Chatinput({socket, currentUser}) {
 const [message, setMessage] = useState("")
 const handleOnSubmit = (event) =>{
    event.preventDefault()
    const data =  JSON.parse(
        localStorage.getItem("chat-app-user")
      );
    if(message.trim() && data.userEmail) {
        socket.emit("message", 
            {
            text: message, 
            from: data.userEmail, 
            to: currentUser.email,
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id
            }
        )
        }
        setMessage("")
        

 }
  return (
            
    <Grid container style={{padding: '20px'}} component="form" onSubmit={(event) =>  handleOnSubmit(event)} noValidate sx={{ mt: 1 }}>
                <Grid item xs={11}>
                    <TextField id="outlined-basic-email" label="Type Something"    value={message} type="text" onChange={(e) => setMessage(e.target.value)} fullWidth />
                </Grid>
                <Grid xs={1} align="right">
                <Button type="submit" ><SendIcon/></Button>
               
                    {/* <Fab color="primary" aria-label="add"><SendIcon /></Fab> */}
                </Grid>
            </Grid>
  )
}
