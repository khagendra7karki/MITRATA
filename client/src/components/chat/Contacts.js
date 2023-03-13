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

const Contacts = ({ changeChat }) => {
  const [users, setUsers] = useState([]);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const data = JSON.parse(localStorage.getItem("chat-app-user")).userEmail;


  const changeCurrentChat = (user, index) => {
    changeChat(user);
    setCurrentSelected(index);
  };
  return (
    <Grid
      item
      xs={3}
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
        <Typography variant="h4" className="header-message">
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
      
          {/* {users.map(
            (user, index) =>
            
              (user.useremail !== data) && ( */}
             
                <ListItem
                  // button
                  // key={user.socketID}
                  // onClick={() => changeCurrentChat(user, index)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "auto",
                    margin: "10px 0",
                    backgroundColor: '#455a64',
                    // `${
                    //   index === currentSelected ? "#455a64" : "#FFFFFF"
                    // }`,
                    padding: "5px",
                    borderRadius: "12px",
                  }}
                >
                  <Grid container>
                    <Grid item xs={3}>
                      <ListItemIcon>
                        <Avatar
                          sx={{ width: 30, height: 30 }}
                          alt="Remy Sharp"
                          src="https://material-ui.com/static/images/avatar/1.jpg"
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={9}>
                    
                      <ListItemText
                        sx={{
                          overflowWrap: "break-word",
                          maxWidth: "100%",
                          color: "black",
                        }}
                        primary='kripesh'
                      ></ListItemText>
                    </Grid>
                  </Grid>
                  {/* <ListItemText secondary="online" align="right"></ListItemText> */}
                </ListItem>
                <ListItem
                  // button
                  // key={user.socketID}
                  // onClick={() => changeCurrentChat(user, index)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "auto",
                    margin: "10px 0",
                    backgroundColor: '#455a64',
                    // `${
                    //   index === currentSelected ? "#455a64" : "#FFFFFF"
                    // }`,
                    padding: "5px",
                    borderRadius: "12px",
                  }}
                >
                  <Grid container>
                    <Grid item xs={3}>
                      <ListItemIcon>
                        <Avatar
                          sx={{ width: 30, height: 30 }}
                          alt="Remy Sharp"
                          src="https://material-ui.com/static/images/avatar/1.jpg"
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={9}>
                    
                      <ListItemText
                        sx={{
                          overflowWrap: "break-word",
                          maxWidth: "100%",
                          color: "black",
                        }}
                        primary='kripesh'
                      ></ListItemText>
                    </Grid>
                  </Grid>
                  {/* <ListItemText secondary="online" align="right"></ListItemText> */}
                </ListItem>
                <ListItem
                  // button
                  // key={user.socketID}
                  // onClick={() => changeCurrentChat(user, index)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "auto",
                    margin: "10px 0",
                    backgroundColor: '#455a64',
                    // `${
                    //   index === currentSelected ? "#455a64" : "#FFFFFF"
                    // }`,
                    padding: "5px",
                    borderRadius: "12px",
                  }}
                >
                  <Grid container>
                    <Grid item xs={3}>
                      <ListItemIcon>
                        <Avatar
                          sx={{ width: 30, height: 30 }}
                          alt="Remy Sharp"
                          src="https://material-ui.com/static/images/avatar/1.jpg"
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={9}>
                    
                      <ListItemText
                        sx={{
                          overflowWrap: "break-word",
                          maxWidth: "100%",
                          color: "black",
                        }}
                        primary='kripesh'
                      ></ListItemText>
                    </Grid>
                  </Grid>
                  {/* <ListItemText secondary="online" align="right"></ListItemText> */}
                </ListItem>
                
              {/* )
          )} */}
        </List>
        {/* <Grid
          container
          css={css`
            background-color: #516653;
            padding: 20px;
            margin: 2;
            border-bottom-right-radius: 18px;
            border-bottom-left-radius: 18px;
          `}
        >
          <List sx={{ width: "100%", maxWidth: 360, alignItems: "buttom" }}>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText
                sx={{ overflowWrap: "break-word", maxWidth: "80%" }}
                primary={`${
                  JSON.parse(localStorage.getItem("chat-app-user")).userEmail
                }`}
              ></ListItemText>
            </ListItem>
          </List>
        </Grid> */}
      </Grid>
    </Grid>
  )
}
export default Contacts