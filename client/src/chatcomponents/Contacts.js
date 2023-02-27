import React, {useState, useEffect} from 'react'

import { List, ListItem, ListItemIcon, ListItemText,Avatar,Grid} from '@mui/material'


const  Contacts=({socket})=> {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])
  return (
  
        <Grid item xs={3} sx={{ borderRight: '1px solid #e0e0e0', background: '#647066'}}>
            <List sx ={{ height: '70vh', overflowY: 'auto'}}>
                
            {users.map((user) => 
                
                <ListItem button key={user.socketID}>
                    {/* <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon> */}
                    <ListItemText primary={`${user.email}`}></ListItemText>
                    {/* <ListItemText secondary="online" align="right"></ListItemText> */}
                </ListItem>

        )}
              
            </List>
            <Grid container style={{padding: '20px'}} >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignItems:'buttom' }}>   
                <ListItem button key="RemySharp">
                    <ListItemIcon>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon>
                    <ListItemText primary={`${JSON.parse(
            localStorage.getItem("chat-app-user")
          ).userEmail}`}></ListItemText>
                </ListItem>
            </List>
            </Grid>

        </Grid>
    
  )
}
export default Contacts