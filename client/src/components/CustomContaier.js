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
    backgroundColor: '#3f304b',
    display: 'flex',
    alignItems: 'center', 
    overflow: 'hidden',
    zIndex: -2

}))

export default CustomContainer