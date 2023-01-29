import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button';
import UserNavBar from '../components/UserNavBar';
const SignUpButton = () => {
    const navigate = useNavigate();
    return (
      <Button variant = 'contained' onClick = { () => {navigate( '/signin')}}>
        Sign In
      </Button>
    )
  }
const Home = () =>{
    return (<>
            <h1>Hello Everyone</h1>
            <SignUpButton />
            <UserNavBar />
    </>
    )
}

export default Home