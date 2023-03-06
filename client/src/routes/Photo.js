import {  AccountCircleOutlined, MessageOutlined, NotificationsOutlined, EmailOutlined, HomeOutlined, SettingsOutlined } from '@mui/icons-material';
import { Button, Avatar, Box, Stack } from '@mui/material'
import { styled } from '@mui/system'

const CustomAvatar = styled( Avatar,{} )({
        backgroundColor: 'transparent',
        width: '60px',
        height: '60px',
        margin: '20px !important',
})
const UserNavBar = ({ onHomeClick, onUserClick, onSettingClick, onNotificationClick , onMessageClick }) => {
    const sx = { position: 'relative' , borderRadius: '20px 0 0  20px ', position: 'absolute', right: '0', top: '50%', transform:'translateY(-50%)', overflow: 'hidden'}
    const itemStyle = { height: '60px', width: '60px', color: 'black'}
    const buttonStyle = {
        backgroundColor: '#b0b0b0',
        borderRadius: '0px',
        '&:hover' : {
            backgrounColor: 'lighBlue'
        }
    }
    return <>
        <Box sx  = { sx }>
            <Stack >
                <Button onClick = { onHomeClick } sx = { buttonStyle }>
                    <CustomAvatar > 
                        <HomeOutlined sx = {itemStyle}/>
                    </CustomAvatar>
                </Button>
                <Button onClick = { onUserClick } sx = { buttonStyle }>
                    <CustomAvatar> 
                        <AccountCircleOutlined sx = {itemStyle}/>
                    </CustomAvatar>
                </Button>
                <Button onClick = { onMessageClick } sx = { buttonStyle }>
                    <CustomAvatar> 
                        <EmailOutlined sx = {itemStyle}/>
                    </CustomAvatar>
                </Button>
                <Button onClick = { onNotificationClick } sx = { buttonStyle }>
                    <CustomAvatar> 
                        <NotificationsOutlined sx = {itemStyle}/>
                    </CustomAvatar>

                </Button>
                <Button onClick = { onSettingClick } sx = { buttonStyle }>
                    <CustomAvatar> 
                        <SettingsOutlined sx = {itemStyle}/>
                    </CustomAvatar>

                </Button>
            </Stack>
        </Box>
    </>
}

export default UserNavBar