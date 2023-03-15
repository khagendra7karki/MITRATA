
import {  useState } from 'react'

//custom imports

import userInfo from '../Utilities/userInfo'

import First from '../components/signupcomponent/First'
import Second from '../components/signupcomponent/Second'


const SignUp = ({ wsObject }) =>{
    
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
    }
    const settingFirst=(rem)=>{
        setFirst(rem)
    }
    
        return <>
            <First  credential = { credential } handleChange = { handleChange } />
            <Second  credential = { credential } handleChange = { handleChange } setCredential = { setCredential } handleSignUp = { handleSignUp }/>
            </>
    
            
}
export default SignUp