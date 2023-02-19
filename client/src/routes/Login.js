import { CardMedia, Typography, Stack, TextField, Button } from '@mui/material'



//custom import
import CustomContainer from "../components/CustomContaier"
import login_bg from '../assets/images/login_bg.jpg'
import logo from '../assets/images/logo-with-name.png'
import CustomLink from '../components/Link'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({wsObject}) => {
    const navigate = useNavigate()
    const [credential, setCredential] = useState({email:'', password:''})
    const handleClick = () =>{
        wsObject.send(JSON.stringify({email:credential.email , password: credential.password}))
        navigate('/user')
    }
    return <>
        <CustomContainer sx = {{ backgroundImage : `url(${login_bg})`, backgroundSize: 'contain' , justifyContent: 'center'}}>
            <Stack>
                <CardMedia component = 'img'
                            image = {logo}
                            sx = {{width: '300px' , pb: 20}}
                ></CardMedia>
                <Typography variant = 'h4' align = 'center' color = 'white'>
                    Login
                </Typography>
                <TextField sx = {{background: 'gray', borderRadius: '12px', my: 2}}
                           label = 'Email'
                           value = { credential.email }
                           onChange = { ( event ) => setCredential(( prev ) => {return  {...prev, email: event.target.value}}) }
                 />
                <TextField  sx = {{background: 'gray', borderRadius: '12px', my: 2}} 
                            label = 'Password' 
                            onChange = {(event) => setCredential((prev) => {return {...prev, password: event.target.value}})} />
                <Button variant = 'contained' sx = {{ borderRadius: '20px !important', py : 1}} onClick = { handleClick }><Typography variant = 'h5'>Login</Typography></Button>
                <Typography align = 'center' variant = 'h6' color = 'white'>New User ? <CustomLink to = '/signup' sx = {{ color: 'white' }}  text = 'Sign Up'/></Typography>

            </Stack>

        </CustomContainer>
    </>
    
}
export default Login

