import { AccountCircleOutlined, ChatBubbleOutlined, NotificationsNoneOutlined, ChevronRightSharp} from '@mui/icons-material'
import { Buttons, Box, Card, CardMedia, Grid, Container, Typography , Avatar} from '@mui/material'
import { Favorite } from '@mui/icons-material';

//custom component
import UserNavBar from '../components/UserNavBar'
import CustomContainer from '../components/CustomContaier'
import Option from '../components/Option'
//image
import Alexandria from '../assets/images/alexandria_daddario.jpg'
const UserFeed = () => {
    return <>
    <CustomContainer>
        <Container maxWidth = 'xl' sx = {{ height: '100vh'}}>
            <Grid container sx = {{ height: '100vh'}}>
                <Grid item xs = { 2 } sx = {{ display: 'flex', alignItems: 'center'}}>
                    <UserNavBar sx = {{ position: 'relative', top: '-90px'}}/>

                </Grid>
                <Grid item xs = { 4 } sx  ={{ marginTop: 8 }}>
                    <Typography variant = 'h2' component = 'h2'>Alisha  19</Typography>
                    <Typography >When I look at the stars at night, I think of you</Typography>
                </Grid>
                <Grid item xs = { 6 } sx = {{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box>
                        <Card sx = {{ height: '600px' }}>
                            <CardMedia component = 'img' 
                                        image = {Alexandria}
                                        sx = {{
                                            height: '100%',
                                            alighItems: 'center'
                                        }}
                                        >

                            </CardMedia>
                        </Card>
                        <Option />
                    </Box>
                    <Avatar sx = {{background: 'white', marginLeft: 2, marginBottom: 8}}>
                            <ChevronRightSharp  color=  'disabled' sx = {{height: '70px', width: '70px'}} />
                    </Avatar>
                </Grid>
            </Grid>
        </Container>
    </CustomContainer>
    </>
} 
export default UserFeed