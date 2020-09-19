import React, { useState } from 'react';
import Signup from '../components/Signup';
import Header from '../components/Header';
import NavTabs from '../components/NavTabs';
import API from '../utils/API';
import { use } from 'passport';

function SignUp() {

    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [middleInitial,setMiddleInitial] = useState()
    const [address,setAddress] = useState()
    const [city,setCity] = useState()
    const [state,setState] = useState()
    const [zipCode,setZipCode] = useState()
    const [birthday,setBirthday] = useState()
    const [phone,setPhone] = useState()

    function handleSubmit(e) {
        e.preventDefault();
        console.log("handle submit clicked")
        
          API.signUp({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            middleInitial: middleInitial,
            address: address,
            city: city,
            state: state,
            zipcode: zipCode,
            birthday: birthday,
            phone: phone
          })
            // .then(res => loadBooks())
            .catch(err => console.log(err));
        
      };
      function handleInputChange(e) {
        let name = e.target.name
        let value = e.target.value
        console.log(name)
        console.log(value)
        switch (name) {
            case "email": 
                setEmail(value)
            break;
            case "password": 
                setPassword(value)
            break;
            case "firstName": 
            setFirstName(value)
            break;
            case "lastName": 
            setLastName(value)
            break;
            case "middleInitial": 
            console.log("MI")
            console.log(value)
            setMiddleInitial(value)
            break;
            case "address": 
            setAddress(value)
            break;
            case "city": 
            setCity(value)
            break;
            case "state": 
            setState(value)
            break;
            case "zipCode": 
            setZipCode(value)
            break;
            case "birthday": 
            console.log("bday")
            console.log(value)
            setBirthday(value)
            break;
            case "phone": 
            setPhone(value)
            break;
        }
 
      }
    return (
        <div>
            <Signup handleInputChange = {handleInputChange} handleSubmit = {()=>handleSubmit}/>
            
        </div>
    )
} 

export default SignUp