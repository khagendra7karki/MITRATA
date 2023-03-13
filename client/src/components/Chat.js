import * as React from 'react';
import { Grid,Box,Paper} from '@mui/material'
import { useState } from 'react';
import Contacts from './chat/Contacts';
import Chatcontainer from './chat/Chatcontainer';

const ChatApp=({display})=> {
  const [currentChat, setCurrentChat] = useState(undefined);
  const changeChat = (chat) => {
    setCurrentChat(chat);
  };
  if( display & 8){
  return (
  
    
    <Grid container  sx ={{ width: '70vh',height: '60vh', }} >
    

    <Chatcontainer  currentChat={currentChat}/>
    <Contacts  changeChat={changeChat}/>
    </Grid>

  )}
  return<>
  </>
}

export default ChatApp;