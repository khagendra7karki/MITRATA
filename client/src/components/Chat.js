// import * as React from 'react';
// import { Grid,Box,Paper} from '@mui/material'
// import { useState } from 'react';
// import Contacts from './chat/Contacts';
// import Chatcontainer from './chat/Chatcontainer';

// const ChatApp=({socket})=> {
//   const [currentChat, setCurrentChat] = useState(undefined);
//   const changeChat = (chat) => {
//     setCurrentChat(chat);
//   };

//   return (
  
    
//     <Grid container  sx ={{ width: '70vh',height: '60vh', }} >
    
//     {/* {currentChat &&  <Chatcontainer socket={socket} currentChat={currentChat}/>} */}
//     <Chatcontainer socket={socket} currentChat={currentChat}/>
//     <Contacts socket={socket} changeChat={changeChat}/>
//     </Grid>





//   );
// }

// export default ChatApp;
export default function Chat({ display }) {
    if( display & 8){
        return <>
            <h2> hello i am chat </h2>
        </>
    }
    return <>
    </>
}