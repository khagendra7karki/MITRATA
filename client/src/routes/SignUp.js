
import {  useState } from 'react'

//custom imports
import {  useNavigate } from 'react-router-dom'
import userInfo from '../Utilities/userInfo'

import First from '../components/SignUpChild'

<<<<<<< HEAD
=======
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
                <Typography align = 'center' variant = 'h5' sx = {{ mt: 1}}>
                    Copyright @ The Gedes
                </Typography>
            </Container>
    </>
}

const Second = ({ credential, handleChange, setCredential, handleSignUp }) => {
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
                <CardMedia component = 'img'
                            image = { logo }
                            sx = {{width: '175px', margin: 'auto', pb: 2, pt: 4}}                        >

                </CardMedia>    
                <Typography align = 'center' variant = 'h4' sx = {{ my: 2}}>Set up your profile</Typography>
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
                               name = 'moto'
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

                <FormControlLabel control = {<Checkbox />}
                                  label = 'Agree to our terms and conditions'
                                  sx = {{ my: 3 }}
                    />
                <Grid container>
                    <Button variant= 'contained'
                            onClick = { handleSubmit }
                            sx = {{ mx: 2, p: 2, background: '#1d84a6', color: 'white', fontWeight: '600', width: '180px'}}>Sign Up</Button>
                    <Button variant = 'contained' onClick = { handleSubmit } sx = {{ mx: 2,  p: 2, background: '#df2a2a', color: 'white', fontWeight: '600', width: '180px'}}>Cancel</Button>
                    <Typography align = 'center' variant = 'h6' color = '#393f45' sx = {{ml: 'auto', alignSelf:'flex-end'}}>Already have an account ? <CustomLink to = '/' sx = {{ color: '#393f45' }}  text = 'Log In'/></Typography>
                </Grid>
            </Stack>
            <Typography align = 'center' variant = 'h5' sx = {{ my: 2}}>
                Copyright @ The Gedes
            </Typography>
           
    </Container>
        
    </>
}
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e


const SignUp = ({ wsObject }) =>{
    const navigate = useNavigate()
    const newUser = new userInfo(wsObject);

    const [ isFirst , setFirst ] = useState(1)

    const userInfoModel = {
        email: '',
        passoword:'',
        confirmPassword:'',
        firstName: '',
        lastName: '',
        age: '',
        motto: '',
        birthday: '',
        address: '',
        gender: 'Female',
        hobbies: [],
        image: []
    }
    const [ credential, setCredential ]  = useState( userInfoModel )
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCredential( (prev) => {
            return { ...prev, [name] : value}
        })
    }
  

    const handleSignUp = () => {
        console.log( credential )
        newUser.createUser( credential )
        navigate('/login')
    }
    const settingFirst=(rem)=>{
        setFirst(rem)
    }
    
        return <>
            <First  credential = { credential } handleChange = { handleChange } setCredential = { setCredential } handleSignUp = { handleSignUp } />
            </>
    
            
}
export default SignUp