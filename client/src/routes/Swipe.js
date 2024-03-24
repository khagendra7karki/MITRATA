import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import wsObject from '../Utilities/frontendWebsocketInterface';
import { Link } from 'react-router-dom';
const currencies = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  }
];

export default function Gender({ setCredential }) {
  const ws = wsObject.webSocketObject
  const [ gender, setGender ] = React.useState( 'Female' ) 
  const handleChange = ( newValue ) =>{
    setGender( newValue )
    setCredential( ( prev ) =>{
        let latest = newValue
        console.log( latest )
        return { ...prev, gender: latest}
    })
  }
  
  return (
    <>
    <TextField
          select
          SelectProps={{
            native: true,
          }}
          
          value = { gender }
          onChange = { (e) =>{
            console.log( e.target.value )
            handleChange( e.target.value )
          }}
          
          >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
          ))}
        </TextField>
      <Link to = '/login'>Click Me</Link>
          </>
  );
}