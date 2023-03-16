

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
import Chat from '../components/Chat'


// const sampleChat = [ 
//     { email: 'david2@gmail.com',name: 'Alexandria', text: [ { from: 'hello there', time: '2023/03/14 2:24'}, { to: 'hi how are you ', 
//         time: '2023/03/14 2: 25'},
        
//         ], image : Alexandria},
        
//     { email: 'bcd1@gmail.com', name: 'George',  text : [ { from: 'Shut the fuck up Bitch', time: '2023/03/14 2:24'}, { to: 'hi how are you ', 
//         time: '2023/03/14 2:25'},
        
//         ], image: image1 }
//     ]

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
    const [ chat, setChat ] = useState( [] )
    const initialSetup = () =>{
        // console.log( user )
        if( !user ){
            console.log( 'something went wrong' )
            return
        }    

        setSuggestion(() =>{
            let present = [ {name: user.suggestion[0].name,
                email: user.suggestion[0].email,
                age: user.suggestion[0].age,
                motto: user.suggestion[0].motto, 
                image: user.suggestion[0].image},
                {
                name: user.suggestion[1].name,
                email: user.suggestion[1].email,
                age: user.suggestion[1].age,
                motto: user.suggestion[1].motto, 
                image: user.suggestion[1].image
                }]
            return present })       
    }
    useEffect( () =>{
            initialSetup()
            console.log( {task: 'get_notif', requester: user.user.email} )
            sendMessage( {task: 'get_notif', requester: user.user.email})
            sendMessage( { task: 'get_chat', requester: user.user.email})
    }, [] )

    const sendNotif = async (id , name, image, fromEmail) =>{
        let message = { task: 'store_notif',key: id , value : {
            email: fromEmail,
            name: name,
            content: `${name} is looking for a match.`,
            image: image
        }}
        console.log( message )
        sendMessage(  message )
    }


    const sendMessage = ( message ) =>{
        console.log( 'i am about to send a message')
        wsObject.send( JSON.stringify( message ))
    }

    wsObject.onmessage = ({data}) => { 
        handleMessages( data )
    }

    const handleMessages = ( response ) => {
        response = JSON.parse( response )
        console.log( response.task )

        if( response.status == 'successful' && response.task == 'getData' ){
            console.log( 'about to change suggestion ')
            console.log( response.content[0])
            setSuggestion( ( prev ) =>{
                return [ prev[1], response.content[0]]
            })
        }   
        else if( response.task == 'get_notif'){
            setUser( (prev) =>{
                return { ...prev, notification: response.notification }
            })
        }
        else if( response.task == 'get_chat'){
            console.log( response.content )
            setChat( response.content )
        }

        else if( response.task == 'update_chat'){
            console.log( response.from )
            console.log( response.content )
            updateChat( response.from, response.content)
        }

    }
    const updateChat  = ( email, text) =>{
        setChat( prev =>{
            let newValue = prev.map( ( chat ) =>{
                if(chat.email == email){
                    chat.text.push( text )
                } 
                return chat
            })
            console.log( newValue )
            
            return newValue
        })
    }

    const sendChat = (to ,  text)=>{
        const  message = { task: 'update_chat', from: user.user.email,to: to,  text: text }
        sendMessage( message )
    }
    const onSwipe = (left, right ) =>{      //do certain task on swipe
        sendMessage( { task: 'getData', gender: user.gender, number: 1, requester: user.user.email } )
        if( right ){
            handleApproval( suggestion[0].email, user.user.name, user.user.image[0], user.user.email)
        }
        else {
            handleRejection( suggestion[0].email )
        }
    }
    const onHomeClick = () =>{
        toggleControl( 1 )

    }
    const onUserClick = () =>{
        
    }
    const onMesageClick = () =>{
        if( navBarControl & 8){
            toggleControl( 1 )
            return
        }
        toggleControl( 8 )
        
        
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
    const handleApproval = ( id, name, image, fromEmail ) =>{
        sendNotif( id, name , image, fromEmail)
    }
    const handleLike = () =>{
        console.log( 'i have been liked' )
    }
    const addFriend = ( profile2, image2, name2 ) =>{
        sendMessage( { task: 'add_friend', email1: user.user.email, image1: user.user.image[0] , email2: profile2, image2: image2, name1: user.user.name, name2: name2})
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
                    <Box>
                        < Swipe images = {[ suggestion[1].image[0],  suggestion[0].image[0]  ]} handleSwipe = { onSwipe } />
                        <Option sx = {{backgroundColor: '#b0b0b0', borderRadius: '20px' , py: 1.5, mx: 2}}
                                handleRejection ={ handleRejection }
                                handleApproval = { handleApproval }
                                handleLike = { handleLike}
                        />
                    </Box>
                    
                </Grid>
                <Grid item xs = { 7 } sx  ={{ display: 'flex', overflowY: 'hidden', height: '100%', alignSelf: 'center', justifyContent: 'center'}}>
                    <UserInfo display = { navBarControl } suggestion = {{ name: suggestion[0].name, motto: suggestion[0].motto, age: suggestion[0].age , image: suggestion[0].image }}/>
                    <Chat display = { navBarControl } chat = { chat } setChat = { setChat } user = { user } sendChat = { sendChat }/>
                    <Notification display = { navBarControl } notifications = { user.notification}  setUser = { setUser } addFriend = { addFriend } sendChat = { sendChat }/>
                </Grid>
                
            </Grid>
        </Container>

        <Card sx = {{background: 'none', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '-1', boxShadow: 'none'}}>
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