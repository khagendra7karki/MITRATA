import * as React from 'react';
import { Grid,Box,Paper} from '@mui/material'
import { useState } from 'react';
<<<<<<< HEAD
import Contacts from './chat/Contacts';
import Chatcontainer from './chat/Chatcontainer';

import Alexandria from '../assets/images/alexandria_daddario.jpg'
import image1 from '../assets/images/image1.jpg'

const ChatApp=({display, user })=> {


  const [ currentChat, setCurrentChat ] = useState( [ 
    { email: '',name: 'Alexandria', text: [ { from: 'hello there', time: '2023/03/14 2:24'}, { to: 'hi how are you ', 
        time: '2023/03/14 2: 25'},
        
        ], image : Alexandria},
        
    { email: '', name: 'George',  text : [ { from: 'Shut the fuck up Bitch', time: '2023/03/14 2:24'}, { to: 'hi how are you ', 
        time: '2023/03/14 2:25'},
        
        ], image: image1 }
    ])

    const [ activeChat , setActiveChat ] = useState( currentChat[0] )
    
    const updateChat = (chat, message) =>{
      
      for ( let i = 0; i < currentChat.length; i++ ){
        setActiveChat( prev =>{
          return { ...prev, text: [ ...prev.text, message ]}
        })
        
        if(  currentChat[ i ].email == chat.email ){
          let newChat = currentChat
          newChat[ i ].text.push( message )
          setCurrentChat( newChat )
          break
        }
        
      }
    }

  // maintains an active chat 
  // whose values will be displayed in the chat container

  if( display & 8){
  return (
  
    
    <Grid container  sx ={{ width: '45vw',height: '60vh', }} >
  
        <Chatcontainer  activeChat ={ activeChat } user = { user } updateChat = { updateChat }/>
        <Contacts  chatList = { currentChat }  setActiveChat = { setActiveChat } />
  
    </Grid>

  )}
  return<>
  </>
}

export default ChatApp;
=======
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
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
