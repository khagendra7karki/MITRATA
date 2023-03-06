import * as React from 'react';
import { Grid,Box,Paper} from '@mui/material'
import { useState } from 'react';
import Contacts from '../chatcomponents/Contacts';
import Chatcontainer from '../chatcomponents/Chatcontainer';

const ChatApp=({socket})=> {
  const [currentChat, setCurrentChat] = useState(undefined);
  const changeChat = (chat) => {
    setCurrentChat(chat);
  };

  return (
  
        <Box sx={{ margin: 'auto',
      width: '50%',
      padding: '10px',
     }}>
    <Grid container component={Paper} sx ={{ width: '100vh',height: '90vh', }} >
    <Contacts socket={socket} changeChat={changeChat}/>
    <Chatcontainer socket={socket} currentChat={currentChat}/>
    </Grid>
    </Box>




  );
}

export default ChatApp;
