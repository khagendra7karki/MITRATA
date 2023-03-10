

import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Box, Card, CardMedia, Grid, Container, Typography , Avatar} from '@mui/material'

//custom component
import UserNavBar from '../components/UserNavBar'
import CustomContainer from '../components/CustomContaier'
import Option from '../components/Option'
import Notification from '../components/Notification'
import UserInfo from '../components/UserInfo'
//image
import logo from '../assets/images/logo-with-name.png'
import Alexandria from '../assets/images/alexandria_daddario.jpg'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import Swipe from '../components/Swipe'
import {useEffect, useState } from 'react'

let firstLoad = true
function setFirstLoad( set ) {
    firstLoad = set
}


const UserFeed = ({ wsObject, user, setUser }) => {
    const sampleUserObject = [{
        name: 'Alisha',
        id: 'alisha773@gmail.comm',
        age: '18',
        motto: `I'm a foodie, a beer snog , a dog lover, and a proud nerd. I'm not shallow , but you better know how to keep the conversation going, because I have more to offer than just my body . Feel free to drop me a line.`,
        image: [Alexandria, image1, image2, image3],  
    },
    {
        name: 'Alisha',
        id: 'alisha773@gmail.comm',
        age: '18',
        motto: `I'm a foodie, a beer snog , a dog lover, and a proud nerd. I'm not shallow , but you better know how to keep the conversation going, because I have more to offer than just my body . Feel free to drop me a line.`,
        image: [Alexandria, image1, image2, image3],  
    }
    ]
    const [ suggestion, setSuggestion ] = useState( sampleUserObject )
    const [ navBarControl, toggleControl ] = useState( new Uint8Array([ 1 ]) )
    const initialSetup = () =>{
        if( !user ){
            console.log( 'something went wrong' )
            return
        }    

        setSuggestion(() =>{
            console.log( user )
            let present = [ {name: user.suggestion[0].name,
                id: user.suggestion[0].email,
                age: user.suggestion[0].age,
                motto: user.suggestion[0].motto, 
                image: user.suggestion[0].image},
                {
                name: user.suggestion[1].name,
                id: user.suggestion[1].email,
                age: user.suggestion[1].age,
                motto: user.suggestion[1].motto, 
                image: user.suggestion[1].image
                }]
            return present })       
    }
    useEffect( () =>{
        // console.log( user )
        if( firstLoad ){
            initialSetup()
            setFirstLoad( false )
        }
    }, [] )




    const sendMessage = ( message ) =>{
        wsObject.send( JSON.stringify( message ))
    }

    wsObject.onmessage = ({data}) => { 
        handleMessages( data )
        console.log( suggestion[0].name)
        console.log(suggestion[1].name )
    }

    const handleMessages = ( response ) => {
        response = JSON.parse( response )
        if( response.status == 'successful' && response.task == 'getData' ){
            setSuggestion( ( prev ) =>{
                return [ prev[1], response.content[0]]
            })
        }

    }
    const onSwipe = async (left, right ) =>{      //do certain task on swipe
        console.log( 'i am abour to send message')
        sendMessage( { task: 'getData', gender: user.gender, number: 1, requester: user.user.email } )
        if( right ){
            handleApproval( suggestion[0].id)
        }
        else {
            handleRejection( suggestion[0].id )
        }
    }
    const onHomeClick = () =>{
        let a = navBarControl & 0 //resetting all the other bits
        a |= 1                  //setting d0 bit 
        toggleControl( a )

    }
    const onUserClick = () =>{
        
    }
    const onMesageClick = () =>{
        
    }
    const onNotificationClick = () =>{
        if( navBarControl & 16 ){
            toggleControl( 1 )
            return
        }
        toggleControl( 16 )         // 00010000
    }
    const onSettingClick = () =>{
        
    }
    const handleRejection = ( id ) =>{
        console.log( 'i have been rejected')
    }
    const handleApproval = ( id ) =>{
        console.log('i have been approved')
        // const message = { task: 'notification', email: id, notification:{name: user.name ,message: `${ user.name} is looking for a match with you`, image: user.image[0]}}
        // sendMessage(  message )
    }
    const handleLike = () =>{
        console.log( 'i have been liked' )
    }
    return <>
    <CustomContainer sx = {{ display: 'flex'}}>
        <UserNavBar sx = {{ position: 'relative' , borderRadius: '20px 0 0  20px ', backgroundColor: '#b0b0b0', position: 'absolute', right: '0', top: '50%', transform:'translateY(-50%)'}}
                    onMessageClick = { onMesageClick }
                    onHomeClick = { onHomeClick } 
                    onUserClick = { onUserClick }
                    onNotificationClick = { onNotificationClick }
                    onSettingClick = { onSettingClick }
        />
        <Container sx = {{ padding: '0 !important', display: 'flex' , alignItems: 'center', maxHeight: '800px'}}>
            <Grid container>
                <Grid item xs = { 5 } sx = {{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronLeft  color=  'disabled' sx = {{height: '90px', width: '90px'}} />
                    <Box>
                        < Swipe image1 = { suggestion[0].image[0] } image2 = { suggestion[1].image[0] } handleSwipe = { onSwipe } />
                        <Option sx = {{backgroundColor: '#b0b0b0', borderRadius: '20px' , py: 1.5, mx: 2}}
                                handleRejection ={ handleRejection }
                                handleApproval = { handleApproval }
                                handleLike = { handleLike}
                        />
                    </Box>
                    
                    <ChevronRight  color = 'disabled' sx = {{ height: '90px' , width: '90px' }} />
                </Grid>
                <Grid item xs = { 7 } sx  ={{ display: 'flex', overflowY: 'hidden', height: '100%', alignSelf: 'center', justifyContent: 'center'}}>
                    <UserInfo display = { navBarControl } suggestion = {{ name: suggestion[0].name, motto: suggestion[0].motto, age: suggestion[0].age , image: suggestion[0].image }}/>
                    <Notification display = { navBarControl }  />
                </Grid>
                
            </Grid>
        </Container>

        <Card sx = {{background: 'none', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '-1'}}>
            <CardMedia component = 'img'
                        image = {logo}
                        sx = {{width: '150px', border: '0'}}
                        >

            </CardMedia>
        </Card>
    </CustomContainer>
    </>
} 
export default UserFeed