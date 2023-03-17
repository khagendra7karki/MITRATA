import * as React from 'react';
import { Grid,Box,Paper} from '@mui/material'
import { useState } from 'react';
import Contacts from './chat/Contacts';
import Chatcontainer from './chat/Chatcontainer';


const ChatApp=({display, chat, setChat, user , sendChat })=> {

  const [ activeChat , setActiveChat ] = useState(  (chat ? chat[0]: null) )
    
    const updateChat = (chat, message) =>{
      console.log( message )
      setActiveChat( prev =>{
        let newValue = { ...prev, text: [ ...prev.text, message ]}
        console.log( newValue )
        return newValue
      })
      for ( let i = 0; i < chat.length; i++ ){
        
        if(  chat[ i ].email == chat.email ){
          let newChat = chat
          newChat[ i ].text.push( message )
          setChat( newChat )
          break
        }
      }
      
    }


  if( display & 8){
  return (
  
    
    <Grid container  sx ={{ width: '45vw',height: '60vh', }} >
        <Chatcontainer user = { user } activeChat ={ activeChat } chat = { chat } updateChat = { updateChat } sendChat = { sendChat }/>
        <Contacts  chatList = { chat }  setActiveChat = { setActiveChat } />
  
    </Grid>

  )}
  return<>
  </>
}

export default ChatApp;