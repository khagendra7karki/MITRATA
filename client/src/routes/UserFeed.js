import { ChevronLeft } from '@mui/icons-material'
import { Buttons, Box, Card, CardMedia, Grid, Container, Typography , Avatar} from '@mui/material'

//custom component
import UserNavBar from '../components/UserNavBar'
import CustomContainer from '../components/CustomContaier'
import Option from '../components/Option'
//image
import logo from '../assets/images/logo-with-name.png'
import Alexandria from '../assets/images/alexandria_daddario.jpg'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
const UserFeed = () => {
    return <>
    <CustomContainer sx = {{ display: 'flex'}}>
        <UserNavBar sx = {{ position: 'relative' , borderRadius: '20px 0 0  20px ', backgroundColor: '#b0b0b0', position: 'absolute', right: '0', top: '50%', transform:'translateY(-50%)'}}/>
        <Container sx = {{ padding: '0 !important', display: 'flex' , alignItems: 'center', maxHeight: '800px'}}>
            <Grid container>
                <Grid item xs = { 5 } sx = {{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx = {{background: 'none', marginLeft: 2, marginBottom: 8}}>
                    <ChevronLeft  color=  'disabled' sx = {{height: '90px', width: '90px'}} />
                </Avatar>
                    <Box>
                        <Card sx = {{ height: '600px' , borderRadius: '20px'}}>
                            <CardMedia component = 'img' 
                                        image = {Alexandria}
                                        sx = {{
                                            height: '100%',
                                            alighItems: 'center',
                                        }}
                                        >

                            </CardMedia>
                        </Card>
                        <Option sx = {{backgroundColor: '#b0b0b0', borderRadius: '20px' , py: 1.5, mx: 2}}/>
                    </Box>
                </Grid>
                <Grid item xs = { 7 } sx  ={{ display: 'flex', overflowY: 'hidden', height: '100%', alignSelf: 'center', justifyContent: 'center'}}>
                    <Box maxWidth='600px'maxHeight='500px'>
                        <Typography variant = 'h2' component = 'h2' color = 'white' sx = {{marginLeft: 3}}>Alisha  19</Typography>
                        <Typography sx = {{ color: '#964c90', lineHeight: '1.2', fontSize: '24px', m: 3}} >
                            I'm a foodie, a beer snog , a dog lover, and a proud nerd. I'm not shallow , but you better know how to keep the conversation going, because I have more to offer than just my body . Feel free to drop me a line.
                        </Typography>
                        <Box sx = {{ display: 'flex', justifyContent: 'center', borderRadius: '16px' , mx: 3}}>
                            <Grid container> 
                                <Grid item   sm = { 6 }  md = { 4 } sx = {{display: 'flex' , justifyContent: 'center', p: 0}}>
                                    <Card sx = {{width: '200px', borderRadius: '0'}}>
                                        <CardMedia component = 'img'
                                                    image = { image1 }
                                                    sx = {{width: '100%'}}
                                                    
                                        >

                                        </CardMedia>
                                    </Card>

                                </Grid>
                            
                                <Grid item  sm = { 6 } md = { 4 } sx = {{display: 'flex' , justifyContent: 'center', p: 0}}>
                                    <Card sx = {{width: '200px', borderRadius: '0'}}>
                                        <CardMedia component = 'img'
                                                        image = { image2 }
                                                        sx = {{width: '100%'}}
                                                        >
                                        </CardMedia>
                                    </Card>
                                </Grid>

                                <Grid item  sm = { 6 } md = { 4 }  sx = {{display: 'flex' , justifyContent: 'center', p: 0}}>
                                    <Card sx = {{width: '200px', borderRadius: '0'}}>
                                        <CardMedia component = 'img'
                                                        image = { image3 }
                                                        sx = {{width: '100%'}}
                                                        >

                                        </CardMedia>
                                    </Card>
                                </Grid>
                                <Grid item  sm = { 6 } md = { 4 }  sx = {{display: 'flex' , justifyContent: 'center', p: 0}}>
                                    <Card sx = {{width: '200px', borderRadius: '0'}}>
                                        <CardMedia component = 'img'
                                                        image = { Alexandria }
                                                        sx = {{width: '100%'}}
                                                        >

                                        </CardMedia>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    

                        
                
                </Grid>
                
            </Grid>
        </Container>

        <Card sx = {{background: 'none', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)'}}>
            <CardMedia component = 'img'
                        image = {logo}
                        sx = {{width: '150px', border: '0'}}
                        >

            </CardMedia>
        </Card>
    </CustomContainer>
    </>
} 
export default UserFeed