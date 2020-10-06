import React, { useEffect, useState } from 'react';
import AddressList from '../components/AddressList';
import API from '../utils/API';
import { Button, Container, Card, ListGroup, ListGroupItem, Form, FormControl } from 'react-bootstrap';


function AddressBook() {

  const [getAddress, setGetAddress] = useState([{}])
  const [matched, setMatched] = useState([{}])
  const [searchName, setSearchName] = useState()
  const userId = sessionStorage.getItem("id")

  useEffect(() => {
    getAllAddress();
  }, []);

  function getAllAddress(c) {
    API.getAddress()
      .then(({ data }) => {
        console.log(data)
        console.log("Check")
        setGetAddress(data)
        setMatched(data)
      })
  }

  function handleInput(searchName) {
    console.log(searchName.target.value)
    let nameSearch = searchName.target.value.toLowerCase()
    setSearchName(nameSearch)

  };

  function handleSubmit() {
    console.log("check")
    let x = matched.filter(address => {
      let firstName = address.firstName.toLowerCase()
      let lastName = address.lastName.toLowerCase()
      if ((firstName.indexOf(searchName)) !== -1) {
        return address
      }
      else if ((lastName.indexOf(searchName)) !== -1) {
        return address
      }
    })
    console.log("check arr")
    console.log(x)
    setMatched(x)
  }



  return (
    <div id='myDIV'>
      <Container>
      <Button className="btn-outline-success" onClick={() => API.exportAddressBook()}>Export Address Book</Button>
      <Form inline>
        <FormControl type="text" placeholder="Search Name" className="mr-sm-2,searchbar" onChange={handleInput} />
        
        <Button id="search" variant="outline-success" onClick={handleSubmit}>Search</Button>
        <Button variant="outline-success" onClick={getAllAddress}>Clear Filter</Button>
      </Form>
      </Container>
      <AddressList addressData={matched} />
      <br></br>
      <style type="text/css">
        {`
        .btn-outline-success{
          padding-right: 20px;
          margin-bottom: 10px;
          margin-top: 10px;
          margin-right: 10px;
          background-color: #287ffa;
          color: white;
          border-color: #6d6d6d;
          border-width: 1px;
        }
        .btn-outline-success:hover{
          background-color: #f7f700;
          color: black;
          border-color: #b1b1b1;
          box-shadow: 4px 4px 40px 12px  white;
        }
        #search{
          
          margin-left: 10px;
        }
        `}
      </style>

    </div>

  )
}

export default AddressBook;
// 