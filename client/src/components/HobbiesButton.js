import { Button, Typography } from "@mui/material"
import { useState } from "react"
import { styled } from "@mui/system"

const MyButton = styled( Button, {})({
    background: '#efefef',
    '&:hover':{
        boxShadow: '20px'
    },
    borderRadius: '15px',
    padding: '10px',
    paddingRight: '20px',
    paddingLeft: '20px',
    color: 'black'

})
const HobbiesButton = ({text}) =>{
    const [ isActive, setActive ] = useState( false ) 
    return <>
        <MyButton onClick = { () => {
                    setActive( prev => !prev)}}
                    sx = {{ boxShadow: !isActive ? '10px 10px 8px grey' : 'none'}}
        
        >
            <Typography>{ `${text}`}</Typography>
        </MyButton>
    </>
}

export default HobbiesButton