import * as React from 'react';
import { Grid,Paper} from '@mui/material'



import Head from '../chatcomponents/Head';
import Contacts from '../chatcomponents/Contacts';
import Chatcontainer from '../chatcomponents/Chatcontainer';

const chatApp=({socket})=> {
 
  return (
    <div >
    <Grid container component={Paper} sx ={{ width: '100vh',height: '90vh',}}>
    <Head/>
    <Contacts socket={socket}/>
    <Chatcontainer socket={socket}/>
    </Grid>
  </div>



  );
}

export default chatApp;
