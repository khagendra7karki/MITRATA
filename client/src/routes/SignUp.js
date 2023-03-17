
import {  useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//custom imports
import {  useNavigate } from 'react-router-dom'
import userInfo from '../Utilities/userInfo'

import First from '../components/SignUpChild'



const SignUp = ({ wsObject }) =>{
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };

    const navigate = useNavigate()
    const newUser = new userInfo(wsObject);

   

    const userInfoModel = {
        email: '',
        password:'',
        confirmPassword:'',
        firstName: '',
        lastName: '',
        age: '',
        motto: '',
        birthday: '',
        address: '',
        gender: 'Female',
        hobbies: [],
        image: []
    }
    const [ credential, setCredential ]  = useState( userInfoModel )
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCredential( (prev) => {
            return { ...prev, [name] : value}
        })
    }
  

    const handleSignUp = () => {
        console.log( credential )
        newUser.createUser( credential )
       
    navigate('/login')
    }
   
    
        return <>
            <First  credential = { credential } handleChange = { handleChange } setCredential = { setCredential } handleSignUp = { handleSignUp } />
            </>
    
            
}
export default SignUp