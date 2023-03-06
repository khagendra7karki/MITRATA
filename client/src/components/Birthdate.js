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
        var birthdayInStr = `${newValue.$M + 1 }/${newValue.$D}/${newValue .$y}`
        var birthdate = new Date( birthdayInStr )
        var month_diff = Date.now() - birthdate.getTime();  
      
        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);   
      
        //extract year from date      
        var year = age_dt.getUTCFullYear();  
      
        //now calculate the age of the user  
        var age = Math.abs(year - 1970);  
        return { ...prev, birthday: birthdayInStr , age: age }
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