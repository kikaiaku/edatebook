import React, { useState } from 'react';
import Signup from '../components/Signup';
// import Header from '../components/Header';
// import NavTabs from '../components/NavTabs';
import API from '../utils/API';
// import { use } from 'passport';
import { Link, Redirect } from 'react-router-dom';


function SignUp() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [middleInitial, setMiddleInitial] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setStateVal] = useState()
  const [zipCode, setZipCode] = useState()
  const [birthday, setBirthday] = useState()
  const [phone, setPhone] = useState()
  const [redirect, setRedirect ] = useState(false)

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
      zipCode: zipCode,
      birthday: birthday,
      phone: phone
    })
    setRedirect(true)
    // .catch(err => console.log(err));

  };
  function handleInputChange(e) {
    let name = e.target.name
    let value = e.target.value
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
        setMiddleInitial(value)
        break;
      case "address":
        setAddress(value)
        break;
      case "city":
        setCity(value)
        break;
      case "state":
        setStateVal(value)
        break;
      case "zipCode":
        setZipCode(value)
        break;
      case "birthday":
        setBirthday(value)
        break;
      case "phone":
        setPhone(value)
        break;
    }

  }
  return (
    
    <div  id="myDIV">
              {redirect? <Redirect to="/"/> :null};

    <div className="Signup">
      <Signup handleInputChange={handleInputChange} handleSubmit={handleSubmit} />

    </div>
    </div>
  )
}

export default SignUp