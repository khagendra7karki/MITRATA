import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//styling 
import '../assets/css/birthday.css'

export default function Birthdate({ setCredential }) {
  const [ date, setDate ] = React.useState( '' ) 
  const handleChange = ( newValue ) =>{
    setDate( newValue )
    setCredential( ( prev ) =>{
        return { ...prev, birthday: { year: newValue.$y , month : newValue.$M + 1 , day: newValue.$D}}
    })
  }
  

  return (<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx = {{ width: '100%'}}value={date} onChange={(newValue) => {
                handleChange( newValue )}}/>
        </LocalizationProvider>
    </>
  );
}