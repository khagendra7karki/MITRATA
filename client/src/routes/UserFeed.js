import { AccountCircleOutlined, ChatBubbleOutlined, NotificationsNoneOutlined} from '@mui/icons-material'
import { Buttons, Box, Card, CardMedia, Grid, Container, Typography } from '@mui/material'

//custom component
import UserNavBar from '../components/UserNavBar'
import CustomContainer from '../components/CustomContaier'
//image
import Alexandria from '../assets/images/alexandria_daddario.jpg'
const UserFeed = () => {
    return <>
    <CustomContainer>
        <Container maxWidth = 'xl' sx = {{ height: '100vh'}}>
            <Grid container sx = {{ height: '100vh'}}>
                <Grid item xs = { 2 }>
                    <UserNavBar />

                </Grid>
                <Grid item xs = { 4 }>
                    <Typography variant = 'h2' component = 'h2'>Alisha  19</Typography>
                    <Typography >When I look at the stars at night, I think of you</Typography>
                </Grid>
                <Grid item xs = { 6 } sx = {{ display: 'flex', justifyContent: 'center' }}>
                    <Card>
                        <CardMedia component = 'img' 
                                    image = {Alexandria}
                                    >

                        </CardMedia>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </CustomContainer>
    </>
} 
export default UserFeed