import React from "react";
// import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect, useRef } from "react";
import {
  List,
  Box,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar,
  Avatar,
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

  const onPressed = (event) => {
    event.preventDefault();
    navigate("/user");
  };

  return (
    <Grid
      item
      xs={9}
      sx={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: "18px",
        borderBottomLeftRadius: "18px",
        background: "#EEEEFF",
      }}
    >
      <Grid container>
        <Grid item xs={12} style={{ padding: "10px" }}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={1}>
              <ListItemAvatar sx={{ display: "flex" }}>
                <Avatar
                  sx={{ width: 30, height: 30, margin: "5px 5px" }}
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
            </Grid>
            <Grid item xs={11}>
              <Typography
                sx={{ padding: "10px" }}
                variant="h5"
                className="header-message"
              >
                {currentChat ? currentChat.email : "Divya"}

                {/* {`${currentChat.email}`} */}
              </Typography>
            </Grid>
            {/* <Grid item xs={1} sx={{display:'flex',justifyContent:"center"}}>
            <CloseIcon onClick= { (event)=> onPressed(event)} sx={{bgcolor:'#8c8c8c',padding:'2px'}} />
          </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <List sx={{ height: "40vh", overflowY: "auto" }}>
            {chatMessages.map((message) => {
              return (
                // message.name === currentChat
                message.from ===
                  JSON.parse(localStorage.getItem("chat-app-user")).userEmail
                  ? message.to === currentChat.email && (
                      <ListItem ref={scrollRef} key={message.id}>
                        <Grid container>
                          <Grid
                            item
                            xs={11.5}
                            sx={{
                              display: "flex",
                              flexDirection: "row-reverse",
                            }}
                          >
                            <Box
                              sx={{
                                overflowWrap: "break-word",
                                maxWidth: "60%",
                              }}
                            >
                              <ListItemText
                                align="right"
                                sx={{
                                  bgcolor: "#002680",
                                  color: "white",
                                  borderRadius: "2px",
                                  padding: "5px 15px",
                                }}
                                primary={`${message.text}`}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={0.5} sx={{ display: "flex" }}>
                            <Avatar
                              sx={{ width: 15, height: 15, marginTop: "auto" }}
                              alt="Remy Sharp"
                              src="https://material-ui.com/static/images/avatar/1.jpg"
                            />
                          </Grid>
                          {/* <Grid item xs={12}>
                <ListItemText align="right" secondary="10:30"></ListItemText>
            </Grid> */}
                        </Grid>
                      </ListItem>
                    )
                  : message.to ===
                      JSON.parse(localStorage.getItem("chat-app-user"))
                        .userEmail &&
                      message.from === currentChat.email && (
                        <ListItem key={message.id}>
                          <Grid container>
                            <Grid item xs={0.5} sx={{ display: "flex" }}>
                              <Avatar
                                sx={{
                                  width: 15,
                                  height: 15,
                                  marginTop: "auto",
                                }}
                                alt="Remy Sharp"
                                src="https://material-ui.com/static/images/avatar/1.jpg"
                              />
                            </Grid>
                            <Grid
                              item
                              xs={11.5}
                              sx={{ display: "flex", flexDirection: "row" }}
                            >
                              <Box
                                sx={{
                                  overflowWrap: "break-word",
                                  maxWidth: "40%",
                                }}
                              >
                                <ListItemText
                                  align="left"
                                  primary={`${message.text}`}
                                  sx={{
                                    bgcolor: "#ffffff",
                                    borderRadius: 2,
                                    padding: "10px 15px",
                                  }}
                                />
                              </Box>
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
    </Grid>
  );
};
export default Chatcontainer;
