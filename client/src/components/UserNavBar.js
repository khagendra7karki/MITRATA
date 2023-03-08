import {AccountCircleOutlined, MessageOutlined, NotificationsOutlined, EmailOutlined, HomeOutlined, SettingsOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Typography, Avatar, Box, Stack } from '@mui/material'
import { styled } from '@mui/system'
import { useState } from 'react';

const CustomAvatar = styled( Avatar,{} )({
        backgroundColor: '#b0b0b0',
        width: '60px',
        height: '60px',
        margin: '20px !important',
})

const UserNavBar = ({sx, rightTab}) => {
   const [toggle,setToggle] = useState(true)
    const setSelected =(tabb)=>{
        setToggle(!toggle)    
        
        rightTab(tabb,toggle)
    }
    return <>
        <Box sx  = { sx }>
            <Stack spacing = { 5 }>
                <CustomAvatar > 
                    <HomeOutlined onClick = {()=> {setSelected('Home')}} sx = {{ height: '60px', width: '60px', color: 'black'}}/>
                </CustomAvatar>
                <CustomAvatar > 
                    <AccountCircleOutlined onClick = {()=> {setSelected('contacts')}} sx = {{ height: '60px', width: '60px', color: 'black'}}/>
                </CustomAvatar>
                <CustomAvatar> 
                    <EmailOutlined onClick = {()=> {setSelected('chat')}} sx = {{ height: '60px', width: '60px', color: 'black'}}/>
                </CustomAvatar>
                <CustomAvatar> 
                    <NotificationsOutlined onClick = {()=> {setSelected('notification')}} sx = {{ height: '60px', width: '60px', color: 'black'}}/>
                </CustomAvatar>
                <CustomAvatar> 
                    <SettingsOutlined onClick = {()=> {setSelected('setting')}} sx = {{ height: '60px', width: '60px', color: 'black'}}/>
                </CustomAvatar>
            </Stack>
        </Box>
    </>
}

export default UserNavBar