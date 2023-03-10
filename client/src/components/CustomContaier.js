import Box from '@mui/material/Box'
import { styled } from '@mui/system'

const CustomContainer = styled(Box, {} )(({theme}) =>({
    ...theme,
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    top: '0',
    right: '0',
    bottom: '0',
    top: '0',
    background: 'linear-gradient(0deg, rgb(255, 96, 54), rgb(253, 38, 122)) no-repeat',
    display: 'flex',
    alignItems: 'center', 
    overflow: 'hidden',
    zIndex: -2

}))

export default CustomContainer