import React from "react"
import {  useNavigate } from 'react-router-dom'
import {  useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from '../assets/images/logo-with-name.png'
import CustomLink from './Link'
import Input from "./Input"

import { Container, Grid, Button, CardMedia, Box, Typography } from "@mui/material"
import { Stack } from "@mui/system"



import HobbiesButton from "./HobbiesButton"

import FileUpload from "./FileUpload"
import Birthdate from "./Birthdate"
import Gender from './Gender'


const First = ({credential, handleChange, setCredential, handleSignUp}) => {
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
    const navigate = useNavigate()
    // const [empty, isEmpty ] = useState(false)
    const [ hobbies , setHobbies ] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const preferences = [ 'Travelling', 'Reading', 'Cooking', 'Sports', 'Photography', 'Gardening', 'Movies', 'Music', 'Hiking/Trekking']
    const handleSubmit = () => {
        const prefer = preferences.filter( (value, index) => {
            return hobbies[index]
        })
        credential.hobbies = prefer;
        handleSignUp()
    }
    const handleSubmitForm = (e) =>{
        e.preventDefault()
        if(credential.password == credential.confirmPassword)
        {handleSubmit()}
        else
        { 
            toast.error("password and confirm password must be same, please try again", toastOptions)}
            
    }
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
                    <form onSubmit = { handleSubmitForm }>
                        <Grid container spacing = {3}>
                                <Grid item sm = {6} xs = {12}sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                    <Input placeholder = 'First Name' 
                                            label = 'first Name*'
                                            
                                            onChange = { handleChange } 
                                            name = 'firstName'
                                            value = { credential.firstName }
                                            />

                            </Grid>
                            
                            <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Last Name' 
                                        label = 'Last Name*'
                                        
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
                                       label = 'Email*'
                                      
                                       name = 'email'
                                       onChange = { handleChange }
                                       value = { credential.email }
                                       />

                            </Grid>

                            <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Nationality' 
                                       label = 'Nationality*'
                                       name = 'Nationality'
                                    //    onChange = { handleChange }
                                    //    value = { credential.email }
                                       />

                            </Grid>

                            

                            <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Password' 
                                       type = 'password' 
                                       label = 'Password*'
                                       name = 'password'
                                       onChange = { handleChange }
                                       value = { credential.password }
                                       />

                            </Grid>

                            <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'Confirm Password' 
                                       type = 'password' 
                                       label = 'Confirm Password*'
                                       name = 'confirmPassword'
                                       onChange = { handleChange } 
                                       value = { credential.confirmPassword } 
                                       />
                            </Grid>
                        </Grid>
                       
                        <Grid container spacing = {3} sx={{my:0.75}}>
                        <Grid item sm = {6} xs = {12}sx = {{display: 'flex',justifyContent: 'center', px: 4}}>

                           <Stack direction = 'column' sx = { { width: '100%' }}>
                                <label style = {{ paddingLeft: '20px', fontWeight: '500'}}> Gender* </label>
                                <Gender setCredential = { setCredential } />
                            </Stack>
                        </Grid>
                        <Grid item sm = {6} xs = {12}sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Stack direction = 'column' sx = { { width: '100%' }}>
                                <label style = {{ paddingLeft: '20px', fontWeight: '500'}}> Birthdate* </label>
                                <Birthdate setCredential =  {setCredential}/>
                            </Stack>
                        </Grid>

                    <Grid item xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                        <Input label = 'Motto*'
                               name = 'motto'
                               value = { credential.motto }
                               onChange = { handleChange }
                               placeholder = 'Write something you believe in or describes about yourself'/>
                    </Grid>
                </Grid>

                <Typography variant = 'h5' sx = {{ mt: 3 }}>{'Choose your preferences( select at least three)'}</Typography>
                <Grid container spacing = { 2 } sx = {{py: 5}}>
                    <Grid item xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                            <HobbiesButton name = 'Travelling'
                                           text = 'Travelling'
                                           value = { 0 }
                                           setHobbies = { setHobbies }
                                           />
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton text = 'Reading'
                                       name = 'Reading'
                                       value = { 1 }
                                       setHobbies = { setHobbies }
                                       />
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton  name = 'Cooking'
                                        text = 'Cooking' 
                                        value = { 2 }
                                        setHobbies = { setHobbies }
                                        />
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton  name = 'Sports'
                                        text = 'Sports' 
                                        value = { 3 }
                                        setHobbies = { setHobbies }
                                        />
                        
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton  name = 'Photography'
                                        text = 'Photography'
                                        value = { 4 }
                                        setHobbies = { setHobbies }
                                        />
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton  name = 'Gardening'
                                        text = 'Gardening'
                                        value = { 5 } 
                                        setHobbies = { setHobbies }
                                        />
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton  name = 'Movies'
                                        text = 'Movies' 
                                        value = { 6 }
                                        setHobbies = { setHobbies }
                                        />
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton  name = 'Music'
                                        text = 'Music'
                                        value = { 7 } 
                                        setHobbies = { setHobbies }
                                        />
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton  name = 'Hiking/Trekking'
                                        text = 'Hiking/Trekking' 
                                        value = { 8 }
                                        setHobbies = { setHobbies }
                                        />
                        
                    </Grid>

                
                </Grid>
                <Typography variant = 'h2'>
                        Add a photo
                </Typography>
                <FileUpload setCredential = { setCredential } />

               
                <Grid container sx={{my:3}}>
                    <Button type='submit' variant= 'contained' sx = {{ mx: 2, p: 2, background: '#1d84a6', color: 'white', fontWeight: '600', width: '180px'}}>Sign Up</Button>
                     <Button onClick={()=>{navigate('/login')}} variant = 'contained' sx = {{ mx: 2,  p: 2, background: '#df2a2a', color: 'white', fontWeight: '600', width: '180px'}}>Cancel</Button>
                    <Typography align = 'center' variant = 'h6' color = '#393f45' sx = {{ml: 'auto', alignSelf:'flex-end'}}>Already have an account ? <CustomLink to = '/' sx = {{ color: '#393f45', fontWeight:'bold' }}  text = 'Log In'/></Typography>
                </Grid>
                    </form>
                  
                    

                </Stack>
                <Typography align = 'right' variant = 'h6' sx = {{ my: 2}}>
                Copyright @ The Mitrata
            </Typography>
            </Container>
            
    </>
}
export default First