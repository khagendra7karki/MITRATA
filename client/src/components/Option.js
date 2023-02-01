import { Favorite , CheckOutlined, ClearSharp} from '@mui/icons-material';
import { Typography, Avatar, Box, Stack } from '@mui/material'

const Option = () => {
    return <>
        <Box sx = { { display: 'flex', justifyContent: 'space-evenly' , my: 3}}>
            <CheckOutlined  color = 'primary' fontSize = 'large' sx = {{height: '50px', width: '50px'}} />
            <Favorite color = 'primary' fontSize = 'large' sx = {{height: '50px', width: '50px'}} />
            <ClearSharp  color = 'primary' fontSize = 'large' sx = {{height: '50px', width: '50px'}}/>
        </Box>
    </>
}

export default Option