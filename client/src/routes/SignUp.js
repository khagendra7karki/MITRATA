
import {  useState } from 'react'

//custom imports
import {  useNavigate } from 'react-router-dom'
import userInfo from '../Utilities/userInfo'

import First from '../components/SignUpChild'



const SignUp = ({ wsObject }) =>{
    const navigate = useNavigate()
    const newUser = new userInfo(wsObject);

    const [ isFirst , setFirst ] = useState(1)

    const userInfoModel = {
        email: '',
        passoword:'',
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
    const settingFirst=(rem)=>{
        setFirst(rem)
    }
    
        return <>
            <First  credential = { credential } handleChange = { handleChange } setCredential = { setCredential } handleSignUp = { handleSignUp } />
            </>
    
            
}
export default SignUp