import {AccountCircleOutlined, MessageOutlined, NotificationsOutlined, EmailOutlined, HomeOutlined, SettingsOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Avatar, Box, Stack } from '@mui/material'
import { styled } from '@mui/system'

const CustomAvatar = styled( Avatar,{} )({
        backgroundColor: '#b0b0b0',
        width: '60px',
        height: '60px',
        margin: '20px !important',
})
const UserNavBar = ({sx}) => {
    const navigate = useNavigate()
    
    return <>
        <Box sx  = { sx } >
            <Stack spacing = { 5 }>
                <CustomAvatar > 
                    <HomeOutlined sx = {{ height: '60px', width: '60px', color: 'black'}}/>
                </CustomAvatar>
                <CustomAvatar > 
                    <AccountCircleOutlined sx = {{ height: '60px', width: '60px', color: 'black'}}/>
                </CustomAvatar>
                <CustomAvatar > 
                    <EmailOutlined sx = {{ height: '60px', width: '60px', color: 'black'}} onClick={() => { navigate("/chat")}}/>
                </CustomAvatar>
                <CustomAvatar> 
                    <NotificationsOutlined sx = {{ height: '60px', width: '60px', color: 'black'}}/>
                </CustomAvatar>
                <CustomAvatar> 
                    <SettingsOutlined sx = {{ height: '60px', width: '60px', color: 'black'}}/>
                </CustomAvatar>
            </Stack>
        </Box>
    </>
}

export default UserNavBar