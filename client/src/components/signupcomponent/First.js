import React from "react"
import logo from '../../assets/images/logo-with-name.png'
import CustomLink from '../Link'
import Input from "../Input"
import {  useNavigate } from 'react-router-dom'
import { Container, Grid, Button, CardMedia, FormControlLabel, Box, Typography , Checkbox,OutlinedInput, FormControl, InputLabel, TextField} from "@mui/material"
import { Stack } from "@mui/system"
const First = ({settingFirst,credential, handleChange}) => {
    const navigate = useNavigate()
    return <>
            <Container>
                <Stack justifyContent  ='center' sx = {{ pb: 3}}>
                    <CardMedia component = 'img'
                                image = { logo }
                                sx = {{width: '175px', margin: 'auto', pb: 2, pt: 4}}>

                    </CardMedia>    
                    <Typography align = 'center' variant = 'h5'>Sign up to Mitrata</Typography>
                    <Button variant = 'contained'
                            sx = {{background: '#df2a2a',py: 2,px: 5, mx: 'auto', my: 4}}>
                        <Typography variant = 'h5'>
                            Sign up with Google
                        </Typography>
                    </Button>
                    <form>
                        <Grid container spacing = {3}>
                                <Grid item sm = {6} xs = {12}sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                    <Input placeholder = 'First Name' 
                                            label = 'First Name'
                                            onChange = { handleChange } 
                                            name = 'firstName'
                                            value = { credential.firstName }
                                            />

                            </Grid>
                            
                            <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Last Name' 
                                        label = 'Last Name'
                                        onChange = { handleChange } 
                                        name = 'lastName'
                                        value = { credential.lastName }
                                        />
                            </Grid>

                            {/* <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Age'
                                       label = 'Age'
                                       name = 'age'
                                       onChange = { handleChange }
                                       value = { credential.age }
                                       />

                            </Grid> */}
                            <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Email' 
                                       label = 'Email'
                                       name = 'email'
                                       onChange = { handleChange }
                                       value = { credential.email }
                                       />

                            </Grid>

                            <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Nationality' 
                                       label = 'Nationality'
                                       name = 'Nationality'
                                    //    onChange = { handleChange }
                                    //    value = { credential.email }
                                       />

                            </Grid>

                            

                            <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Password' 
                                       type = 'password' 
                                       label = 'Password'
                                       name = 'password'
                                       onChange = { handleChange }
                                       value = { credential.password }
                                       />

                            </Grid>

                            <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Confirm Password' 
                                       type = 'password' 
                                       label = 'Confirm Password'
                                       name = 'confirmPassword'
                                       onChange = { handleChange } 
                                       value = { credential.confirmPassword } 
                                       />
                            </Grid>
                        </Grid>
                    </form>
                  
                    

                </Stack>
                
            </Container>
            
    </>
}
export default First