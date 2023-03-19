
import {  useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//custom imports

import userInfo from '../Utilities/userInfo'

import First from '../components/signupcomponent/First'
import Second from '../components/signupcomponent/Second'


const SignUp = ({ wsObject }) =>{
<<<<<<< HEAD
    
=======
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };

    const navigate = useNavigate()
>>>>>>> e45375f71783379f9b3d7ef85c75fb7d63b49d52
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
<<<<<<< HEAD
    }
    const settingFirst=(rem)=>{
        setFirst(rem)
=======
       
    navigate('/login')
>>>>>>> e45375f71783379f9b3d7ef85c75fb7d63b49d52
    }
   
    
        return <>
            <First  credential = { credential } handleChange = { handleChange } />
            <Second  credential = { credential } handleChange = { handleChange } setCredential = { setCredential } handleSignUp = { handleSignUp }/>
            </>
    
            
}
export default SignUp