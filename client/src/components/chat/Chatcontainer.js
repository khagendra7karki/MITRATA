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
const Chatcontainer = ({  activeChat , user, updateChat }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat ]);


  return (
    <Grid
      item
      xs={ 8 }
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
            <Grid item xs={2}>
              <ListItemAvatar sx={{ display: "flex" }}>
                <Avatar
                  sx={{ width: 40, height: 40, margin: "5px 5px" }}
                  alt="Remy Sharp"
                  src= { activeChat.image }
                />
              </ListItemAvatar>
            </Grid>
            <Grid item xs={10}>
              <Typography
                sx={{ padding: "10px" }}
                variant="h6"
                className="header-message"
              >
                { activeChat.name }

              </Typography>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12}>
          <List sx={{ height: "40vh", overflowY: "auto" }}>

              {
                activeChat.text.map( ( (chat, index, { length }) =>{
                  return <>
                      <ListItem ref={ length - 1 == index ? scrollRef : null}  key= {index} >
                        <Grid container flexDirection = { `${ chat.from  ? 'row' : 'row-reverse'}`}>
                          <Grid
                            item
                            xs={11}
                            sx={{
                              display: "flex",
                            }}
                          >
                            <Box
                              sx={{
                                overflowWrap: "break-word",
                                maxWidth: "60%",
                                marginLeft: `${ chat.from ? 'auto': 'none'}`
                              }}
                            >
                              <ListItemText
                                align="right"
                                sx={{
                                  bgcolor: "#002680",
                                  color: "white",
                                  borderRadius: "10px",
                                  padding: "5px 15px",
                                }}
                                primary= {`${ chat.from ? chat.from : chat.to }`}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={1} sx={{ display: "flex" }}>
                            <Avatar
                              sx={{ width: 30, height: 30, marginTop: "auto" }}
                              alt="Remy Sharp"
                              src=  {chat.from ? user.user.image[0] : activeChat.image }
                            />
                          </Grid>

                        </Grid>
                      </ListItem>
                  </>
                }))
              }
                     

          </List>

          <Chatinput  activeChat={ activeChat } updateChat = { updateChat }/>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Chatcontainer;