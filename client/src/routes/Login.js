
import { CardMedia, Typography, Stack, TextField, Button } from '@mui/material'

//custom import
import CustomContainer from "../components/CustomContaier"
import login_bg from '../assets/images/login_bg.jpg'
import logo from '../assets/images/logo-with-name.png'
import CustomLink from '../components/Link'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({wsObject, setUser }) => {
    const navigate = useNavigate()
    
    const [credential, setCredential] = useState({email:'', password:''})
    wsObject.onmessage = ({ data }) => { handleMessages( data ) }
    //
    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };

    const handleMessages = (message) =>{
        message = JSON.parse( message )
        console.log( message )
        if( message.status == 'successful'  && message.task == 'verify'){
        
              const{ task, status, ...rest }  = message
            console.log( rest )
            setUser( { ...rest } )
            navigate( '/user' )
        }
        else if(message.task == 'unsuccessful' && message.reason == "wrong_password")
            toast.error("Wrong Password", toastOptions);
        else{
            toast.error("Invalid Email Address", toastOptions);}
        }
    
    const sendMessage = ( message ) =>{
        wsObject.send( JSON.stringify( message ))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(credential.email == '' && credential.password ==''){toast.error("Email or password is missing", toastOptions);}
        sendMessage({ task: 'verify', email: credential.email, password: credential.password })
    }
    return <>
        <CustomContainer sx = {{ backgroundImage : `url(${login_bg})`, backgroundSize: 'cover' , justifyContent: 'center'}}>
                <form onSubmit = { handleSubmit }>
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

                <Button variant = 'contained' sx = {{ borderRadius: '20px !important', py : 1, my: 1 }} onClick = { handleSubmit }>
                    <Typography variant = 'h5'>Login</Typography>
                </Button>
             
                <Typography align = 'center' variant = 'h5' color = 'white' sx = {{ my: 1}}>
                    New User?  
                    <CustomLink to = '/signup' sx = {{ color: 'white',marginLeft:'6px',fontWeight:'bold'}}  text = 'Sign Up'/>
                </Typography>
            </Stack>
                </form>

        </CustomContainer>
        <ToastContainer />
    </>
    
}
export default Login