import * as React from 'react';
import { Grid} from '@mui/material'
import { useState } from 'react';
import Contacts from './chat/Contacts';
import Chatcontainer from './chat/Chatcontainer';


const ChatApp=({display, chat, user , sendChat })=> {

  const [ activeChat , setActiveChat ] = useState(  (chat ? chat[0]?.email: null) )
  
    
  if( display & 8){
  return (
  
    
    <Grid container  sx ={{ width: '45vw',height: '60vh', }} >
        <Chatcontainer user = { user } activeChat ={ activeChat } chat = { chat } sendChat = { sendChat }/>
        <Contacts  chatList = { chat }  setActiveChat = { setActiveChat } />
    </Grid>

  )}
  return<>
  </>
}

export default ChatApp;