import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
// import Fab from '@mui/material/Fab';
import SendIcon from "@mui/icons-material/Send";
import { Grid, TextField } from "@mui/material";
export default function Chatinput({  currentUser }) {
  const [message, setMessage] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = JSON.parse(localStorage.getItem("chat-app-user"));
    // if (message.trim() && data.userEmail) {
    //   socket.emit("message", {
    //     text: message,
    //     from: data.userEmail,
    //     to: currentUser.email,
    //     id: `${socket.id}${Math.random()}`,
    //     socketID: socket.id,
    //   });
    // }
    setMessage("");
  };
  return (
    <Grid
      container
      style={{ padding: "20px" }}
      component="form"
      onSubmit={(event) => handleOnSubmit(event)}
      noValidate
      sx={{
        mt: 1,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "center",
      }}
    >
      <Grid item xs={9}>
        <TextField
          size="small"
          id="outlined-basic"
          label="Type a message here"
          variant="outlined"
          value={message}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid xs={3} align="right">
        {/* <Button type="submit" ><SendIcon/></Button> */}
        <Button
          type="submit"
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
          sx={{ marginTop: "10px" }}
        >
          Send
        </Button>
        {/* <Fab color="primary" aria-label="add"><SendIcon /></Fab> */}
      </Grid>
    </Grid>
  );
}