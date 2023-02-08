import { Container, Grid, Button, CardMedia, FormControlLabel, TextField, Typography , Checkbox,OutlinedInput, FormControl, InputLabel} from "@mui/material"
import { Stack } from "@mui/system"
import { useState } from 'react'

//custom imports
import logo from '../assets/images/logo-with-name.png'
import CustomLink from '../components/Link'
import Input from "../components/Input"
import HobbiesButton from "../components/HobbiesButton"

const First = ({setFirst}) => {
    return <>
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
        <form>
            <Grid container spacing = {3}>
                    <Grid item sm = {6} xs = {12}sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                        <Input placeholder = 'First Name' label = 'First Name'/>

                </Grid>
                
                <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                    <Input placeholder = 'Last Name' label = 'Last Name'/>
                </Grid>

                <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                    <Input placeholder = 'email' label = 'Email'/>

                </Grid>

                <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                    <Input placeholder = 'Nationality' label ='Nationality' />

                </Grid>

                <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                    <Input placeholder = 'Password' type = 'password' label = 'password'/>

                </Grid>

                <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                    <Input placeholder = 'Confirm Password' type = 'password' label = 'Confirm Password'/>
                </Grid>
            </Grid>
        </form>
        <FormControlLabel control = {<Checkbox />}
                            label = 'Agree to our terms and conditions'
        sx = {{ my: 3 }}
        />
        <Grid container>
            <Button variant= 'contained'
                    onClick = { () => {
                        setFirst(false)
                    }}
                    sx = {{ mx: 2, p: 2, background: '#1d84a6', color: 'white', fontWeight: '600', width: '180px'}}>Next</Button>
            <Button variant = 'contained' sx = {{ mx: 2,  p: 2, background: '#df2a2a', color: 'white', fontWeight: '600', width: '180px'}}>Cancel</Button>
            <Typography align = 'center' variant = 'h6' color = '#393f45' sx = {{ml: 'auto', alignSelf:'flex-end'}}>Already have an account ? <CustomLink to = '/' sx = {{ color: '#393f45' }}  text = 'Log In'/></Typography>
        </Grid>

    </Stack>
    <Typography align = 'center' variant = 'h5' sx = {{ mt: 2}}>
        Copyright @ The Gedes
    </Typography>
</Container>
    </>
}

const Second = ({setFirst}) => {
    return<>
    <Container>
            <Stack justifyContent  ='center' sx = {{borderBottom: '2px solid black', pb: 5}}>
                <CardMedia component = 'img'
                            image = { logo }
                            sx = {{width: '175px', margin: 'auto', pb: 2, pt: 4}}                        >

                </CardMedia>    
                <Typography align = 'center' variant = 'h5'>Sign up to Mitrata</Typography>
                <form>
                    <Grid container spacing = {3}>
                            <Grid item sm = {6} xs = {12}sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                                <Input placeholder = 'First Name' label = 'Gender'/>

                        </Grid>
                        
                        <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Input placeholder = 'Last Name' label = 'Looking For'/>
                        </Grid>

                        <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Input placeholder = 'email' label = 'Age'/>

                        </Grid>

                        <Grid item sm = {6} xs = {12} sx = {{display: 'flex',justifyContent: 'center', px: 4}}>
                            <Input placeholder = 'Nationality' label ='Address' />

                        </Grid>

                    </Grid>
                </form>

                <Typography>{'Choose your preferences( select at least three)'}</Typography>
                <Grid container spacing = { 2 }>
                    <Grid item xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                            <HobbiesButton text = 'hello' />
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton text = 'hello' />
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton text = 'hello' />
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton text = 'hello' />
                        
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton text = 'hello' />
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton text = 'hello' />
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton text = 'hello' />
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton text = 'hello' />
                        
                    </Grid>
                    <Grid item  xs = {6} sm = {4} sx = {{display: 'flex', justifyContent: 'center'}}>
                        <HobbiesButton text = 'hello' />
                        
                    </Grid>

                
                </Grid>
                <FormControlLabel control = {<Checkbox />}
                                    label = 'Agree to our terms and conditions'
                sx = {{ my: 3 }}
                />
                <Grid container>
                    <Button variant= 'contained'
                            onClick = { () => {
                                setFirst(false)
                            }}
                            sx = {{ mx: 2, p: 2, background: '#1d84a6', color: 'white', fontWeight: '600', width: '180px'}}>Sign Up</Button>
                    <Button variant = 'contained' sx = {{ mx: 2,  p: 2, background: '#df2a2a', color: 'white', fontWeight: '600', width: '180px'}}>Cancel</Button>
                    <Typography align = 'center' variant = 'h6' color = '#393f45' sx = {{ml: 'auto', alignSelf:'flex-end'}}>Already have an account ? <CustomLink to = '/' sx = {{ color: '#393f45' }}  text = 'Log In'/></Typography>
                </Grid>

            </Stack>
            <Typography align = 'center' variant = 'h5' sx = {{ mt: 2}}>
                Copyright @ The Gedes
            </Typography>
    </Container>
        
    </>
}


const SignUp = () =>{
    const [ isFirst , setFirst ] = useState(true)
    if( isFirst) {
        return <>
            <First setFirst = { setFirst }/>
        </>
    }
    else{
        return <>
            <Second />
        </>
    }
            
}
export default SignUp