import { CardMedia, Typography, Stack, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

//custom import
import CustomContainer from "../components/CustomContaier"
import login_bg from '../assets/images/login_bg.jpg'
import logo from '../assets/images/logo-with-name.png'

const Login = () => {
    return <>
        <CustomContainer sx = {{ backgroundImage : `url(${login_bg})`, backgroundSize: 'contain' , justifyContent: 'center'}}>
            <Stack>
                <CardMedia component = 'img'
                            image = {logo}
                            sx = {{width: '300px', height: '500px' , pb: 20}}
                ></CardMedia>
                <Typography variant = 'h4' align = 'center' color = 'white'>
                    Login
                </Typography>
                <TextField sx = {{background: 'gray', borderRadius: '12px', my: 2}} label = 'Email' />
                <TextField  sx = {{background: 'gray', borderRadius: '12px', my: 2}} label = 'Password' />
                <Typography variant = 'h6' color = 'white' align = 'right'>New User ?<Link to = '/signup'>Sign Up</Link></Typography>
                
            </Stack>

        </CustomContainer>
    </>
    

}

export default Login