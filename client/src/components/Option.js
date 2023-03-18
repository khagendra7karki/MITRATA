import { Favorite , CheckOutlined, ClearSharp} from '@mui/icons-material';
import { Typography, Avatar, Box, Stack } from '@mui/material'

const Option = ({sx, handleRejection, handleApproval, handleLike }) => {
    const itemStyles = {height: '60px',
                  width: '60px',
                  transition: 'cubic-bezier(0,.54,.92,.2)',
                  '&:hover':{
                    transform: 'scale(1.3)'
                  }
                }
    return <>
        <Box sx = { { ...sx, display: 'flex', justifyContent: 'space-evenly' , my: 3}}>
            <CheckOutlined  color = 'primary' fontSize = 'large' sx = {itemStyles} onClick = { handleApproval } />
            <Favorite color = 'primary' fontSize = 'large' sx = {itemStyles} onClick = { handleLike }/>
            <ClearSharp  color = 'primary' fontSize = 'large' sx = {itemStyles} onClick = { handleRejection }/>
        </Box>
    </>
}

export default Option