import React from "react";
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  Avatar,
  Grid,Box,
  Divider,
} from "@mui/material";
export default function Notification() {
  return (
    <>
      <Grid
        container
        sx={{
          width: "50vh",
          height: "65vh",
          bgcolor: "#b0b0b0",
          borderRadius: "50px",
          display: "flex",
        }}
      >
        <Typography
          variant="h8"
          sx={{ padding: "10px 50px 0px " }}
          className="header-message"
        >
          Notification
        </Typography>
        <Grid
          container
          sx={{
            positon: "absolute",
            margin: "0px 5px 40px  ",
            width: "50vh",
            height: "60vh",
            bgcolor: "#242629",
            borderRadius: "50px",
          }}
        >
          <Grid item style={{ padding: "10px", height: "10px" }} xs={12}>
            //Notification will be displayed here
            <List
              sx={{
                margin: "auto",
                width: "100%",
                maxWidth: 425,

                height: "55vh",
              }}
            >
              {/* {notificationCollection.map((notify, index) => ( */}
                <ListItem
                  sx={{
                    bgcolor: "#b8c9e3",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "auto",
                    margin: "5px 5px",
                    padding: "20px",
                  }}
                >
                  <Grid container  sx={{}}>
                    <Grid item xs={2}>
                    <ListItemIcon>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                  </ListItemIcon></Grid>
                  <Grid item xs={10}>
                  <Typography sx={{padding: '3px 3px'}}>fromRandomContact</Typography> </Grid>
                  </Grid>
                  <ListItemText
                    sx={{ overflowWrap: "break-word", width: "100%" }}
                  >
                    hello world hello world
                  </ListItemText>
                </ListItem>
              {/* ))} */}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
