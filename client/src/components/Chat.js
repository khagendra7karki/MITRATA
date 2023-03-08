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
  
    
    <Grid container  sx ={{ width: '100vh',height: '90vh', }} >
    <Contacts socket={socket} changeChat={changeChat}/>
    {/* {currentChat &&  <Chatcontainer socket={socket} currentChat={currentChat}/>} */}
    <Chatcontainer socket={socket} currentChat={currentChat}/>
    </Grid>





  );
}

export default ChatApp;
