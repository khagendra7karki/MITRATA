import {AccountCircleOutlined, MessageOutlined, NotificationsRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Typography, Avatar, Box, Stack } from '@mui/material'

const userStyling = {
    backgroundColor: 'primary.main',
}
const UserNavBar = () => {
    
    return <>

            <Stack spacing = { 2 } sx = { {paddingTop: 3}}>
                <Avatar sx = { userStyling }> 
                    <AccountCircleOutlined />
                </Avatar>
                <Avatar sx = { userStyling }> 
                    <MessageOutlined />
                </Avatar >
                <Avatar sx = { userStyling }> 
                    <NotificationsRounded />
                </Avatar>
            </Stack>
    </>
}

export default UserNavBar