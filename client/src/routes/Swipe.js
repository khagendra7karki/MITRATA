import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Birthdate({ setCredential }) {
  const [ date, setDate ] = React.useState( '' ) 
  const handleChange = ( newValue ) =>{
    setDate( newValue )
    setCredential( ( prev ) =>{
        return { ...prev, birthday: { year: newValue.$y , month : newValue.$M + 1 , day: newValue.$D}}
    })
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={date} onChange={(newValue) => {
            handleChange( newValue )}}/>
    </LocalizationProvider>
  );
}