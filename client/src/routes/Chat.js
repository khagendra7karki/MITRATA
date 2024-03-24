import * as React from 'react';
import { Grid} from '@mui/material'
import { useState } from 'react';
import Contacts from './chat/Contacts';
import Chatcontainer from './chat/Chatcontainer';


const ChatApp=({display, user })=> {


  const [ currentChat, setCurrentChat ] = useState( [])

  const [ activeChat , setActiveChat ] = useState( currentChat[0]?.email )
  
  const updateChat = (chat, message) =>{
    
    for ( let i = 0; i < currentChat.length; i++ ){
      
      if(  currentChat[ i ] == chat){
        let newChat = currentChat
        newChat[ i ].text.push( message )
        setCurrentChat( newChat )
        break
      }
      
    }
    setActiveChat( prev =>{
      return { ...prev, text: [ ...prev.text, message ]}
    })
  }

  // maintains an active chat 
  // whose values will be displayed in the chat container

  if( display & 8){
  return (
  
    
    <Grid container  sx ={{ width: '45vw',height: '60vh', }} >
  
      <Chatcontainer  chat = {chat} activeChat ={ activeChat } user = { user } updateChat = { updateChat }/>
      <Contacts  chatList = { currentChat }  setActiveChat = { setActiveChat } />
  
    </Grid>

  )}
  return<>
  </>
}

export default ChatApp;