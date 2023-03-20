import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,Button,
    Grid,
  } from "@mui/material";


//css
import '../assets/css/notification.css'
const NotificationItem = ({notification, handleAccept, handleDecline}) =>{

  function acceptedFunc(){
    console.log( 'notification has been accepted')
    console.log( notification )
    handleAccept( notification )
    
  }
  function rejectedFunc(){
    console.log( 'notification has been rejected')  
    // console.log( notification )
    handleDecline( notification)
  }
    return <>
        <List sx={{
            margin:'auto',
            width: "100%",
            maxWidth:425,
          }}>
    <ListItem sx={{bgcolor:'#b8c9e3',display: 'flex', borderRadius:'15px',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
    margin: '2.5px 2.5px',
    padding: '20px'}} className = 'notification-item'>
      <Grid container>
        <Grid item xs={2}><ListItemIcon>
                <Avatar  sx={{ width: 56, height: 56 }}
                  alt="Remy Sharp"
                  src={ notification.image }
                />
              </ListItemIcon></Grid>
        <Grid item xs={10}>
          <ListItemText sx={{ overflowWrap: "break-word", width: "100%",  }}><b>{`${notification.content}`}</b></ListItemText>
   
   </Grid >
   <Grid container sx={{display:'flex' , width: "100%", flexDirection: 'row',
    alignItems: 'center'  }}>
   
   <Button variant="contained" sx={{margin :'1px 5px 0px 160px'}} onClick={acceptedFunc}>Accept</Button>
    <Button variant="outlined" onClick={rejectedFunc}>Reject</Button>


   </Grid>
   
      </Grid>
         </ListItem>
    </List>
    </>
}

   
export default NotificationItem