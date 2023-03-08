import { CardMedia,Box, Typography, Stack, TextField, Button } from '@mui/material'

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//custom import
import CustomContainer from "../components/CustomContaier"
import login_bg from '../assets/images/login_bg.jpg'
import logo from '../assets/images/logo-with-name.png'
import CustomLink from '../components/Link'
const Login = ({socket}) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", password: "" });
    
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
 
      const handleSubmit =  (event) => {
        event.preventDefault();
        const { email, password } = values;
        const userdata  =  {
            userEmail : email,
            userPassword : password
        };
        localStorage.setItem(
              "chat-app-user",
               JSON.stringify(userdata)
            );
            console.log("helllo i reach1")
            console.log(email)
        socket.emit("newUser", {email, socketID: socket.id})
        console.log("helllo i reach2")
        navigate("/user");
      };


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
                <Box component="form" onSubmit={(event) => handleSubmit(event)} noValidate sx={{ mt: 1 }}>
                <TextField sx = {{background: 'gray', borderRadius: '12px', my: 2}} label = 'Email' name="email" type="email" onChange={(e) => handleChange(e)}/>
                <TextField  sx = {{background: 'gray', borderRadius: '12px', my: 2}} label = 'Password'  name="password" type="password" onChange={(e) => handleChange(e)}/>
                <Button type="submit" variant= 'contained' sx = {{ mx: 2, p: 2, background: '#1d84a6', color: 'white', fontWeight: '600', width: '180px'}}>Login</Button>
                </Box>
            </Stack>

        </CustomContainer>
    </>
    
}
export default Login