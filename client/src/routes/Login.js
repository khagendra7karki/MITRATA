import { CardMedia, Typography, Stack, TextField } from '@mui/material'
import { Link } from 'react-router-dom'


//custom import
import CustomContainer from "../components/CustomContaier"
import login_bg from '../assets/images/login_bg.jpg'
import logo from '../assets/images/logo-with-name.png'
import CustomLink from '../components/Link'
const Login = () => {
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
                <TextField sx = {{background: 'gray', borderRadius: '12px', my: 2}} label = 'Email' />
                <TextField  sx = {{background: 'gray', borderRadius: '12px', my: 2}} label = 'Password' />
                <Typography align = 'center' variant = 'h6' color = 'white'>New User ? <CustomLink to = '/signup' sx = {{ color: 'white' }}  text = 'Sign Up'/></Typography>

            </Stack>

        </CustomContainer>
    </>
    
}
export default Login