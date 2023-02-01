import {AccountCircleOutlined, MessageOutlined, NotificationsRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Typography, Avatar, Box, Stack } from '@mui/material'

const userStyling = {
    backgroundColor: 'primary.main',
    width: '60px',
    height: '60px'
}
const UserNavBar = ({sx}) => {
    
    return <>
        <Box sx  = { sx }>
            <Stack spacing = { 5 }>
                <Avatar sx = { userStyling }> 
                    <AccountCircleOutlined sx = {{ height: '50px', width: '50px'}}/>
                </Avatar>
                <Avatar sx = { userStyling }> 
                    <MessageOutlined sx = {{ height: '50px', width: '50px'}} />
                </Avatar >
                <Avatar sx = { userStyling }> 
                    <NotificationsRounded sx = {{ height: '50px', width: '50px'}}/>
                </Avatar>
            </Stack>
        </Box>
    </>
}

export default UserNavBar