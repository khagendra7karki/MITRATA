import React from "react"
import {  useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo-with-name.png'
import CustomLink from '../Link'
import Input from "../Input"
import HobbiesButton from "../HobbiesButton"

import FileUpload from "../FileUpload"
import Birthdate from "../Birthdate"
import Gender from '../Gender'
import { Container, Grid, Button, CardMedia, FormControlLabel, Box, Typography , Checkbox,OutlinedInput, FormControl, InputLabel, TextField} from "@mui/material"
import { Stack } from "@mui/system"
const Second = ({ credential, handleChange, setCredential, handleSignUp }) => {
    const navigate = useNavigate()
    const [ hobbies , setHobbies ] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const preferences = [ 'Travelling', 'Reading', 'Cooking', 'Sports', 'Photography', 'Gardening', 'Movies', 'Music', 'Hiking/Trekking']
    const handleSubmit = () => {
        const prefer = preferences.filter( (value, index) => {
            return hobbies[index]
        })
        credential.hobbies = prefer;
        handleSignUp()
    }
    
   
      
    return<>
    <Container>
            <Stack justifyContent  ='center' sx = {{borderBottom: '2px solid black', pb: 5}}>
               
                <Grid container spacing = {3}>
                        <Grid item sm = {6} xs = {12}sx = {{display: 'flex',justifyContent: 'center', px: 4}}>

                           <Stack direction = 'column' sx = { { width: '100%' }}>
                                <label style = {{ paddingLeft: '20px', fontWeight: '500'}}> Gender </label>
                                <Gender setCredential = { setCredential } />
                            </Stack>
                        </Grid>
                        <Grid item sm = {6} xs = {12}sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Stack direction = 'column' sx = { { width: '100%' }}>
                                <label style = {{ paddingLeft: '20px', fontWeight: '500'}}> Birthdate </label>
                                <Birthdate setCredential =  {setCredential}/>
                            </Stack>
                        </Grid>

                    <Grid item xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                        <Input label = 'Motto'
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
                    <Button variant= 'contained'
                            onClick = { handleSubmit }
                            sx = {{ mx: 2, p: 2, background: '#1d84a6', color: 'white', fontWeight: '600', width: '180px'}}>Sign Up</Button>
                     <Button onClick={()=>{navigate('/login')}} variant = 'contained' sx = {{ mx: 2,  p: 2, background: '#df2a2a', color: 'white', fontWeight: '600', width: '180px'}}>Cancel</Button>
                    <Typography align = 'center' variant = 'h6' color = '#393f45' sx = {{ml: 'auto', alignSelf:'flex-end'}}>Already have an account ? <CustomLink to = '/' sx = {{ color: '#393f45', fontWeight:'bold' }}  text = 'Log In'/></Typography>
                </Grid>
            </Stack>
            <Typography align = 'right' variant = 'h6' sx = {{ my: 2}}>
                Copyright @ The Mitrata
            </Typography>
           
    </Container>
        
    </>
}
export default Second