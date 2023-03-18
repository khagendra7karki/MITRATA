

import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Box, Card, CardMedia, Grid, Container, Typography , Avatar} from '@mui/material'
import Chat from '../components/Chat'
import Notification from '../components/Notification'

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
<<<<<<< HEAD
import Chat from '../components/Chat'



const UserFeed = ({ wsObject, user, setUser }) => {
    const sampleUserObject = [{
=======

// maintains the user data
const blobToURL = async ( blob ) =>{
    const base64Response = await fetch( blob )
    const URL = await base64Response.blob()
    const returnObject = window.URL.createObjectURL( URL )
    // console.log( 'from top', returnObject )
    return returnObject
}

const UserFeed = ({ wsObject, user, setUser,socket }) => {
    const sampleUserObject = {
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
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
        // console.log( user )
        if( !user ){
            console.log( 'something went wrong' )
            return
        }    
<<<<<<< HEAD

        setSuggestion(() =>{
            console.log( user )
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
=======
        user.suggestion[0].image.map( ( blob ) => { blobToURL( blob.data ).then( ( value ) => {setSuggestion( ( prev    ) => {
                                                                                                if( prev.images ){
                                                                                                    prev.images.push( value )
                                                                                                    return prev
                                                                                                }
                                                                                                return { ...prev, images: [value]}
                                                                                            })})})
        setSuggestion(() =>{
            return {
            name: user.suggestion[0].name,
            id: user.suggestion[0].email,
            age: user.suggestion[0].age,
            motto: user.suggestion[0].motto, 
        }})        
    }
    useEffect( () =>{
        initialSetup()
        console.log( suggestion )
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
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
        if( response.status == 'successful' && response.task == 'getData' ){
            console.log( 'about to change suggestion ')
            console.log( response.content[0])
            setSuggestion( ( prev ) =>{
                return [ prev[1], response.content[0]]
            })
        }
        else if( response.task == 'get_notif'){
            // console.log( response.notification  )
            // console.log({ ...user, notification : JSON.parse( response.notification )} )
            setUser( (prev) =>{
                return { ...prev, notification: response.notification }
            })
        }

    }
    const onSwipe = (left, right ) =>{      //do certain task on swipe
<<<<<<< HEAD
        sendMessage( { task: 'getData', gender: user.gender, number: 1, requester: user.user.email } )
        if( right ){
            handleApproval( suggestion[0].email, user.user.name, user.user.image[0], user.user.email)
        }
        else {
            handleRejection( suggestion[0].email )
        }
=======
        sendMessage( { task: 'getData', gender: user.gender } )
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
    }

    const [toggle,setToggle] = useState(true)
    const [selected,setSelected] = useState('')
    const onHomeClick = () =>{
        toggleControl( 1 )

    }

    const onMesageClick = () =>{
<<<<<<< HEAD
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
=======
        setSelected('message')
    }
    const onNotificationClick = () =>{
        setSelected('notification')
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
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
        <UserNavBar sx = {{ borderRadius: '20px 0 0  20px ', backgroundColor: '#b0b0b0', position: 'absolute', right: '0', top: '50%', transform:'translateY(-50%)'}}
                    onMessageClick = { onMesageClick }
                    onHomeClick = { onHomeClick } 
                    onNotificationClick = { onNotificationClick }
                    onSettingClick = { onSettingClick }
        />
         <Box sx={{ zIndex: 'tooltip',position: 'absolute', right: '120px', top: '50%', transform:'translateY(-50%)'}}  >
        <Chat socket={socket} />
        </Box>
        {toggle && (selected==='notification')&& (<Box sx={{ zIndex: 'tooltip',position: 'absolute', right: '120px', top: '50%', transform:'translateY(-50%)'}}  >
        <Notification socket={socket} />
        </Box>)}
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
<<<<<<< HEAD
                    <UserInfo display = { navBarControl } suggestion = {{ name: suggestion[0].name, motto: suggestion[0].motto, age: suggestion[0].age , image: suggestion[0].image }}/>
                    <Chat display = { navBarControl } user = {user} />
                    <Notification display = { navBarControl } notifications = { user.notification}  setUser = { setUser } addFriend = { addFriend }/>
=======
                    <Box maxWidth='600px'maxHeight='500px'>
                        <Typography variant = 'h2' component = 'h2' color = 'white' sx = {{marginLeft: 3}}>{`${suggestion.name} ${ suggestion.age }`}</Typography>
                        <Typography sx = {{ color: '#964c90', lineHeight: '1.2', fontSize: '24px', m: 3}} >
                            {`${ suggestion.motto }`}
                        </Typography>
                        <Box sx = {{ display: 'flex', justifyContent: 'center', borderRadius: '16px' , mx: 3}}>
                            <Grid container> 

                                {(() =>{
                                    const fallout = [1, 2, 3]
                                    if( suggestion.images ){
                                        return<>
                                        {suggestion.images.map( (image, index ) =>{
                                                var img = new Image()
                                                return <>
                                                    <Grid item   sm = { 6 }  md = { 4 } sx = {{display: 'flex' , justifyContent: 'center', p: 0}} key = {index}>
                                                    <Card sx = {{width: '200px', borderRadius: '0'}}>
                                                        <CardMedia component = 'img'
                                                                image = { image }
                                                                sx = {{width: '100%'}}
                                                        >
                                                        </CardMedia>
                                                    </Card>
                                                    </Grid>        
                                                </>
                                            })}
                                        </>
                                    }
                                    else
                                        return<>{
                                            fallout.map( ( index ) =>{
                                                return<>
                                                <Grid item   sm = { 6 }  md = { 4 } sx = {{display: 'flex' , justifyContent: 'center', p: 0}} key = {index}>
                                                <Card sx = {{width: '200px', borderRadius: '0'}}>
                                                    <CardMedia component = 'img'
                                                            sx = {{width: '100%', width: '150px', height: '150px', background: 'grey'}}
                                                    >
                                                    </CardMedia>
                                                </Card>

                                                </Grid>        
                                        </>})
                                        } 
                                    </>
                                })()}

                            </Grid>
                        </Box>
                    </Box>

                    

                        
                
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
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