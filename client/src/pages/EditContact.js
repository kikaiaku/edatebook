import React, { useEffect, useState } from 'react';
import EditContactComp from '../components/EditContactComp';
import API from '../utils/API';

function EditContact() {

  const [showAddress, setShowAddress] = useState(false);
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
  const addressId = sessionStorage.getItem("addressId")

  const [getAddress, setGetAddress] = useState([{}])

  useEffect(() => {
    getSingleAddress();
  }, []);

  //New // - gets all addresses
  function getAllAddress(c) {
    API.getAddress()
      .then(({ data }) => {
        console.log("Updated contact: " + data)
        setGetAddress(data)
      })
  }

  //Get selected address to edit
  function getSingleAddress(c) {
    API.getSingleAddress({ id: addressId })
      .then(({ data }) => {
        setFirstName(data[0].firstName)
        setMiddleInitial(data[0].middleInitial)
        setLastName(data[0].lastName)
        setEmail(data[0].email)
        setPhone(data[0].phone)
        setBirthday(data[0].birthday)
        setAddress(data[0].address)
        setCity(data[0].city)
        setStateVal(data[0].state)
        setZipCode(data[0].zipCode)
        setComments(data[0].comments)
      })
  }


  function handleSubmit(e) {
    e.preventDefault();
    API.editAddress({
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
      userId: userId,
      id: addressId
    })
    //New - gets all addresses
    getAllAddress();
    console.log("Got all addresses")
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
  }

  return (
    <div  id="myDIV">
    <div className="newBody" >
      <EditContactComp handleInputChange={handleInputChange} handleSubmit={handleSubmit} address={address} firstName={firstName} middleInitial={middleInitial} lastName={lastName} email={email} phone={phone} birthday={birthday} city={city} state={state} zipCode={zipCode} comments={comments} />
    </div>
    </div>
  )
}

export default EditContact;