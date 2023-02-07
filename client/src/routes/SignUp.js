import { Container, Grid, Box, Button, CardMedia, FormControlLabel, TextField, Typography , Checkbox,OutlinedInput, FormControl, InputLabel} from "@mui/material"
import { Stack } from "@mui/system"
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
import { useState } from "react";
//custom imports
import logo from '../assets/images/logo-with-name.png'
import CustomLink from '../components/Link'
import Input from "../components/Input"
const SignUp = () =>{
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        nationality: "",
        password: "",
        confirmPassword: "",
      });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
    
  const handleSubmit = async (event) => {
    event.preventDefault();
   
   
      const { firstName, lastName, email,nationality, password } = values;
      console.log(values)
      const { data } = await axios.post(registerRoute, {        //axios acts as a api to send the required data
        firstName,
        lastName,
        email,
        nationality,
        password
      });

      if (data.status === true) {
        localStorage.setItem(
          "chat-app-user",
          JSON.stringify(data.user)
        );
    navigate("/user")
      }
  };

    return( 
        <>
        <Container>
            <Stack justifyContent  ='center' sx = {{borderBottom: '2px solid black', pb: 5}}>
                <CardMedia component = 'img'
                            image = { logo }
                            sx = {{width: '175px', margin: 'auto', pb: 2, pt: 4}}                        >
                </CardMedia>    
                <Typography align = 'center' variant = 'h5'>Sign up to Mitrata</Typography>
                <Button variant = 'contained'
                        sx = {{background: '#df2a2a',py: 2,px: 5, mx: 'auto', my: 4}}>
                    <Typography variant = 'h5'>
                        Sign up with Google
                    </Typography>
                </Button>
                <Box component="form" onSubmit={(event) => handleSubmit(event)} noValidate sx={{ mt: 1 }}>
                
                    <Grid container spacing = {3}>
                            <Grid item sm = {6} xs = {12}sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input name="firstName"  type="text" placeholder = 'First Name' label = 'First Name' onChange={(e) => handleChange(e)} />

                        </Grid>
                        
                        <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Input name="lastName" type="text"placeholder = 'Last Name' label = 'Last Name' onChange={(e) => handleChange(e)}/>
                        </Grid>

                        <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Input name="email" type="text" placeholder = 'email' label = 'Email' onChange={(e) => handleChange(e)}/>

                        </Grid>

                        <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Input name="nationality" type="text" placeholder = 'Nationality' label ='Nationality' onChange={(e) => handleChange(e)}/>

                        </Grid>

                        <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Input name="password" type="password" placeholder = 'Password'  label = 'password' onChange={(e) => handleChange(e)} />

                        </Grid>

                        <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Input name="confirmPassword" type="password" placeholder = 'Confirm Password'  label = 'Confirm Password' onChange={(e) => handleChange(e)}/>
                        </Grid>
                    </Grid>
              
                <FormControlLabel control = {<Checkbox />}
                                    label = 'Agree to our terms and conditions'
                sx = {{ my: 3 }}
                />
                <Grid container>
                    <Button type="submit" variant= 'contained' sx = {{ mx: 2, p: 2, background: '#1d84a6', color: 'white', fontWeight: '600', width: '180px'}}>CreateUser</Button>
                    <Button variant = 'contained' sx = {{ mx: 2,  p: 2, background: '#df2a2a', color: 'white', fontWeight: '600', width: '180px'}}>Cancel</Button>
                    <Typography align = 'center' variant = 'h6' color = '#393f45' sx = {{ml: 'auto', alignSelf:'flex-end'}}>Already have an account ? <CustomLink to = '/' sx = {{ color: '#393f45' }}  text = 'Log In'/></Typography>
                </Grid>  
                </Box>
            </Stack>
            <Typography align = 'center' variant = 'h5' sx = {{ mt: 2}}>
                Copyright @ The Gedes
            </Typography>
        </Container>
    </>
        
     )   
}
export default SignUp
