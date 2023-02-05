import * as React from 'react'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link , Grid, Box, Typography, Container} from '@mui/material'
import{ LockPersonOutlined } from '@mui/icons-material'
import { createTheme , ThemeProvider } from '@mui/material/styles'
function Copyright(props){
    return (
        <Typography variant = 'body2'
                    color = 'text.seconodary' 
                    align = 'center'
                    {...props}>
        { 'copyright © Divya Karki'}
        </Typography>
    )
}

const theme = createTheme();

const SignIn = () =>{
    const handleSubmit = ( event ) => {
        event.preventDefault()
        const data = new FormData( event.currentTarget)

    }
        
        
        return (
            <ThemeProvider theme = { theme }>
                <Container component = 'main'
                            maxWidth = 'xs'>
                    <CssBaseline />
                    <Box 
                        sx = {{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx = {{
                            m: 1, bgcolor: 'secondary.main'
                        }}>
                            <LockPersonOutlined />
                        </Avatar>
                        <Typography component = 'h1' variant = 'h5'>
                            Sign In
                        </Typography>
                            <Box component = 'form' noValidate onSubmit = { handleSubmit } sx = {{ mt: 3 }}>
                                <Grid container spacing = { 2 }>

                               
                                    <Grid item 
                                            xs = { 12 }>
                                                <TextField 
                                                    required
                                                    fullWidth
                                                    id = 'email'
                                                    name = 'email'
                                                    label = 'Email'
                                                    autoComplete = 'radom@gamil.com'
                                                />
                                    </Grid>
                                    <Grid item xs = { 12 }>
                                        <TextField 
                                            required
                                            fullWidth
                                            name = 'password'
                                            label = 'Password'
                                            type = 'password'
                                            id = 'password'
                                            autoComplete = 'new-password'
                                            />
                                        
                                    </Grid>

                                    <Grid item xs = { 12 }>
                                        <FormControlLabel
                                        control = { <Checkbox value = 'allowExtraEamils' color = 'primary' />}
                                        label = 'I agree to the terms and conditions'
                                        />
                                    </Grid>
                                    
                                </Grid>
                                <Button
                                    type = 'submit'
                                    fullWidth
                                    variant = 'contained'
                                    sx = {{
                                        mt: 3, mb: 2
                                    }}>
                                        Sign In
                                </Button>
                                
                                <Grid container justifyContent = 'flex-end'>
                                    <Grid item>
                                    Create a account?<Link href = '/signup' varinat = 'body2'>
                                          Sign UP
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>


                    </Box>
                    <Copyright sx = {{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        )
        
        
}
export default SignIn