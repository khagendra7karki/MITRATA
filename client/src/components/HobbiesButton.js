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
    color: 'black',
    flexGrow: 1
})
const HobbiesButton = ({ text, value,  setHobbies}) =>{
    const [ isActive, setActive ] = useState( false ) 
    return <>
        <MyButton onClick = { () => {
                    setHobbies( prev => {
                        prev[value] = !prev[value]
                        return prev
                    })
                    setActive( !isActive )}}
                    sx = {{ boxShadow: !isActive ? '10px 10px 8px grey' : 'none'}}
        
        >
            <Typography>{ `${text}`}</Typography>
        </MyButton>
    </>
}

export default HobbiesButton     