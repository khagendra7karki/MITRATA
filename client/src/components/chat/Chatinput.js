import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
// import Fab from '@mui/material/Fab';
import SendIcon from "@mui/icons-material/Send";
import { Grid, TextField } from "@mui/material";
export default function Chatinput({  activeChat, updateChat }) {
  const [message, setMessage] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if( message ){
      updateChat( activeChat, { from: message, time: ''})
      setMessage( '' )

    }
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
          sx = {{ borderRadius: '0 4px 4px 0px'}}
        />
      </Grid>
      <Grid align = 'center'>
        <Button
          type="submit"
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
          sx={{ marginTop: '10px', height: '39px'}} 
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
}