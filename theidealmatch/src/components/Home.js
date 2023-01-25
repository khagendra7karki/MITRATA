import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Home() {


  
  return(
    <div className='bgimage'>
    <div className='buttonpp'>
    <Button variant="primary"  href="/signin">Sign In</Button>
    </div>
    <div>
    <div className='text2'>
        <p style={{color :'white' }}><h1 ><b>Find your Ideal match</b></h1></p><br/>
        </div>
        <div className='buttonpp2'>
    <Button variant="primary"  href="/signup">Sign Up</Button>
    </div></div>
</div>
  )
}
