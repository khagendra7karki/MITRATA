

import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Box, Card, CardMedia, Grid, Container, Typography , Avatar} from '@mui/material'

//custom component
import UserNavBar from '../components/UserNavBar'
import CustomContainer from '../components/CustomContaier'
import Option from '../components/Option'
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

const InternalImage = ( image ) =>{
    // console.log( image )
        return <>
            <Grid item   sm = { 6 }  md = { 4 } sx = {{display: 'flex' , justifyContent: 'center', p: 0}} >
                        <Card sx = {{width: '200px', borderRadius: '0', background: '#3f304b', display: 'flex', alignItems: 'center'}}>
                            <CardMedia component = 'img'
                                image = { image.image }
                                sx = {{width: '100%'}}
                        >
                        </CardMedia>
                    </Card>
                </Grid>
        </>
    
}
const InternalImageWraper = ({ images }) =>{
    const fallout = [0, 1, 2]
    if ( images ){
        // console.log( images )
        return<>
            { images.map( ( image, index ) => { return <InternalImage image = { image } key = { index }/> }) }
        </> 
    }
    else {
        console.log( 'its a fallout')
        return <>{
            fallout.map( ( index ) =>{
                
                 return <Grid item   sm = { 6 }  md = { 4 } sx = {{display: 'flex' , justifyContent: 'center', p: 0}} key = { index } >
                        <Card sx = {{width: '200px', borderRadius: '0'}}>
                            <CardMedia component = 'img'
                                sx = {{width: '100%', height: '200px' , width: '200px', background: 'grey'}}
                        >
                        </CardMedia>
                    </Card>
                </Grid>        
            })}
        </>
    }
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
    const initialSetup = () =>{
        // console.log( user )
        if( !user ){
            console.log( 'something went wrong' )
            return
        }    

        setSuggestion(() =>{
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
            // console.log( 'outputting the usre suggestion',user.suggestion[0])
            return present })       
    }
    useEffect( () =>{
        // console.log( user )
        if( firstLoad ){
            initialSetup()
            setFirstLoad( false )
        }
    }, [] )

    useEffect( () =>{
        console.log( 'first', suggestion[0].name )
        console.log( 'second', suggestion[1].name)
    }, [suggestion[0] ])


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
            console.log( 'about to change suggestion ')
            setSuggestion( ( prev ) =>{
                return [ prev[1], response.content[0]]
            })
        }

    }
    const onSwipe = (left, right ) =>{      //do certain task on swipe
        sendMessage( { task: 'getData', gender: user.gender, number: 1 } )
    }
    const onHomeClick = () =>{

    }
    const onUserClick = () =>{
        
    }
    const onMesageClick = () =>{
        
    }
    const onNotificationClick = () =>{
        
    }
    const onSettingClick = () =>{
        
    }
    const handleRejection = () =>{
        console.log( 'i have been rejected')
    }
    const handleApproval = () =>{
        console.log('i have been approved')
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
                    <Box maxWidth='600px'maxHeight='500px'>
                        <Typography variant = 'h2' component = 'h2' color = 'white' sx = {{marginLeft: 3}}>{`${suggestion[0].name} ${ suggestion[0].age }`}</Typography>
                        <Typography sx = {{ color: '#964c90', lineHeight: '1.2', fontSize: '24px', m: 3}} >
                            {`${ suggestion[0].motto }`}
                        </Typography>
                        <Box sx = {{ display: 'flex', justifyContent: 'center', borderRadius: '16px' , mx: 3}}>
                            <Grid container> 
                                <InternalImageWraper images = { suggestion[0].image } />
                            </Grid>
                        </Box>
                    </Box>
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