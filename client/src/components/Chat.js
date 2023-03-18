import * as React from 'react';
import { Grid,Box,Paper} from '@mui/material'
import { useState } from 'react';
import Contacts from '../chatcomponents/Contacts';
import Chatcontainer from '../chatcomponents/Chatcontainer';

const ChatApp=({})=> {
  const [currentChat, setCurrentChat] = useState(undefined);
  const changeChat = (chat) => {
    setCurrentChat(chat);
  };

  return (
  
    
    <Grid container  sx ={{ width: '70vh',height: '60vh', }} >
    
    {/* {currentChat &&  <Chatcontainer socket={socket} currentChat={currentChat}/>} */}
    <Chatcontainer  currentChat={currentChat}/>
    <Contacts  changeChat={changeChat}/>
    </Grid>





  );
}

export default ChatApp;
