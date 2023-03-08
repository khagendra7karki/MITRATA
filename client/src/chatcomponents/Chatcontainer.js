import React from "react";
// import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect, useRef } from "react";
import {
  List,
  Box,
  ListItem,
  Typography,
  ListItemText,
  Grid,
} from "@mui/material";
import Chatinput from "./Chatinput";
const Chatcontainer = ({ socket, currentChat }) => {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("messageResponse", (data) =>
      setChatMessages([...chatMessages, data])
    );
    console.log(chatMessages);
  }, [socket, chatMessages]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const onPressed=(event) =>{
    event.preventDefault()
    navigate('/user')
  }
 
  return (
    <Grid item xs={9} sx={{height:'90vh',width:'100vh', display:'flex', flexDirection: 'column',  borderTopRightRadius:'18px',borderBottomRightRadius:'18px',background: "#b0b0b0" }}>
      <Grid item xs={12} style={{ padding: "10px" }} >
        <Grid container direction="row" alignItems="center">
          <Grid item xs={11}>
            <Typography
              variant="h5"
              className="header-message"
            > 
            {currentChat ? currentChat.useremail : 'hello'}
           
              {/* {`${currentChat.email}`} */}
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{display:'flex',justifyContent:"center"}}>
            <CloseIcon onClick= { (event)=> onPressed(event)} sx={{bgcolor:'#8c8c8c',padding:'2px'}} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <List sx={{ height: "70vh", overflowY: "auto" }}>
          {chatMessages.map((message) => {
            return (
              // message.name === currentChat
              message.from ===
                JSON.parse(localStorage.getItem("chat-app-user")).userEmail
                ? (message.to === currentChat.useremail) && (
                    <ListItem  ref={scrollRef} key={message.id}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          sx={{ display: "flex", flexDirection: "row-reverse" }}
                        >
                          <Box
                            sx={{ overflowWrap: "break-word", maxWidth: "40%" }}
                          >
                            <ListItemText
                              align="right"
                              sx={{ bgcolor: "#5434b6", borderRadius: 2, padding: '10px 15px' }}
                              primary={`${message.text}`}
                            />
                          </Box>{" "}
                        </Grid>
                        {/* <Grid item xs={12}>
                <ListItemText align="right" secondary="10:30"></ListItemText>
            </Grid> */}
                      </Grid>
                    </ListItem>
                  )
                : message.to ===
                JSON.parse(localStorage.getItem("chat-app-user")).userEmail &&(message.from === currentChat.useremail) && (
                    <ListItem key={message.id}>
                      <Grid container>
                        <Grid item xs={12}   sx={{ display: "flex", flexDirection: "row" }}>
                        <Box
                            sx={{ overflowWrap: "break-word", maxWidth: "40%" }}
                          >
                          <ListItemText
                            align="left"
                            primary={`${message.text}`}
                            sx={{ bgcolor: "#ffffff", borderRadius: 2, padding: '10px 15px' }} /></Box>
                        </Grid>
                        {/* <Grid item xs={12}>
                    <ListItemText align="right" secondary="10:30"></ListItemText>
                </Grid> */}
                      </Grid>
                    </ListItem>
                  )
            );
          })}
        </List>

        <Chatinput socket={socket} currentUser={currentChat} />
      </Grid>
    </Grid>
  );
};
export default Chatcontainer;
