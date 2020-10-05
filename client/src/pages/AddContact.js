import React, { useEffect, useState } from 'react';
import NewAddressForm from '../components/NewAddressForm';
// import AddressList from '../components/AddressList';
import API from '../utils/API';


function AddContact() {

  const [showAddress, setShowAddress] = useState(false);
  const [getAddress, setGetAddress] = useState([{}])
  const [firstName, setFirstName] = useState()
  const [middleInitial, setMiddleInitial] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [birthday, setBirthday] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setStateVal] = useState()
  const [zipCode, setZipCode] = useState()
  const [comments, setComments] = useState()
  const userId = sessionStorage.getItem("id")

  useEffect(() => {
    getAllAddress();
  }, []);

  function getAllAddress(c) {
    API.getAddress()
      .then(({ data }) => {
        setGetAddress(data)
        console.log(data)
      })
  }


  function handleSubmit(e) {
    e.preventDefault();
    API.addAddress({
      firstName: firstName,
      middleInitial: middleInitial,
      lastName: lastName,
      email: email,
      phone: phone,
      birthday: birthday,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      comments: comments,
      userId: userId
    })
      .catch(err => console.log(err));
    getAllAddress();
  };


  function handleInputChange(e) {
    let name = e.target.name
    let value = e.target.value
    switch (name) {
      case "email":
        setEmail(value)
        break;
      case "city":
        setCity(value)
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
      case "birthday":
        setBirthday(value)
        break;
      case "phone":
        setPhone(value)
        break;
      case "state":
        setStateVal(value)
        break;
      case "zipCode":
        setZipCode(value)
        break;
      case "comments":
        setComments(value)
        break;
    }
    console.log(name.value)
  }

  return (
    <div id="myDIV" className="newBody" >
      <NewAddressForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default AddContact;