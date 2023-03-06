import { CardMedia, Typography, Stack, TextField, Button } from '@mui/material'

//custom import
import CustomContainer from "../components/CustomContaier"
import login_bg from '../assets/images/login_bg.jpg'
import logo from '../assets/images/logo-with-name.png'
import CustomLink from '../components/Link'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
const Login = ({wsObject}) => {
    const navigate = useNavigate()
    const [credential, setCredential] = useState({email:'', password:''})
    wsObject.onmessage = ({data }) => {
        data = JSON.parse( data )
        if( data.status = 'successful' )
            navigate( '/user')
    }
    const handleSubmit = () =>{
        wsObject.send(JSON.stringify({task : 'verify', email:credential.email , password: credential.password}))

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

                <Button variant = 'contained' sx = {{ borderRadius: '20px !important', py : 1, my: 1 }} onClick = { handleSubmit }>
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

