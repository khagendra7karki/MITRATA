import { CardMedia, Typography, Stack, TextField, Button } from '@mui/material'

//custom import
import CustomContainer from "../components/CustomContaier"
import login_bg from '../assets/images/login_bg.jpg'
import logo from '../assets/images/logo-with-name.png'
import CustomLink from '../components/Link'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

const Login = ({wsObject, setUser, socket }) => {
    const navigate = useNavigate()
    var temp = ''
    const [credential, setCredential] = useState({email:'', password:''})
    const [ response, setResponse ] = useState('')
    wsObject.onmessage = ({ data }) => { handleMessages( data ) }


    const handleMessages = (message) =>{
        message = JSON.parse( message )
        console.log( message )
        if( message.status == 'successful'  && message.task == 'verify'){
            //successfull verification follows up with,
            // request to get the profile suggestion
            console.log( message.gender )
            sendMessage( { task: 'getData', gender: message.gender} )
            setResponse( { email: message.email, notification: message.notification , gender: message.gender} )            
            setUser(  {email: message.email, notification: message.notification , gender: message.gender} )
        }
        if( message.status == 'successful' && message.task == 'getData'){
            const{ task, status, ...rest }  = message
            setUser( { ...response, suggestion: [{...rest},] } )
            // console.log( 'value of temp is' , temp)
            // console.log( { task : 'getData' , gender: temp } )
            sendMessage( { task : 'getData' , gender: response.gender } )
            navigate( '/user' )
        }
    } 
    const sendMessage = ( message ) =>{
        wsObject.send( JSON.stringify( message ))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        sendMessage({ task: 'verify', email: credential.email, password: credential.password })
        const userdata = {
            userEmail: credential.email,
            userPassword: credential.password,
          };
          localStorage.setItem("chat-app-user", JSON.stringify(userdata));
        socket.emit("newUser", { useremail : credential.email, socketID: socket.id });
        console.log("helllo i reach2");
     }
    return <>
        <CustomContainer sx = {{ backgroundImage : `url(${login_bg})`, backgroundSize: 'contain' , justifyContent: 'center'}}>
            <Stack>
                <CardMedia component = 'img'
                            image = {logo}
                            sx = {{width: '300px' , pb: 20}}
                ></CardMedia>
                <Typography variant = 'h3' align = 'center' color = 'white'>
                    Login
                </Typography>
                <TextField sx = {{ background: 'white', borderRadius: '12px', my: 2}}
                           label = 'Email'
                           value = { credential.email }
                           onChange = { ( event ) => setCredential(( prev ) => {return  {...prev, email: event.target.value}}) }
                 />
                <TextField  sx = {{background: 'white', borderRadius: '12px', my: 2}} 
                            label = 'Password' 
                            type = 'password'
                            onChange = {(event) => setCredential((prev) => {return {...prev, password: event.target.value}})} />

                <Button variant = 'contained' sx = {{ borderRadius: '20px !important', py : 1, my: 1 }} onClick={(e)=>  handleSubmit(e) }>
                    <Typography variant = 'h5'>Login</Typography>
                </Button>
                <Typography align = 'center' variant = 'h5' color = 'white' sx = {{ my: 1}}>
                    New User ? 
                    <CustomLink to = '/signup' sx = {{ color: 'white' }}  text = 'Sign Up'/>
                </Typography>
            </Stack>

        </CustomContainer>
    </>
    
}
export default Login

