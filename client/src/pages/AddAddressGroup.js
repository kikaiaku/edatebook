import React, { useEffect, useState } from 'react';
import AddressGroupList from '../components/AddressGroupList';
import API from '../utils/API';
import { Container, Form, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

function AddAddressGroup() {

  const [getAddress, setGetAddress] = useState([{}])

  const userId = sessionStorage.getItem("id")
  // const [idDelete,setIdDelete] = useState()

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

  return (
    <div>
      {/* <NewAddressForm handleInputChange = {handleInputChange} handleSubmit = {handleSubmit}/> */}
      {/* box to enter group name and next to it a button to create group */}
      <InputGroup className="mb-3">
    <FormControl
      placeholder="Group Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
  </InputGroup>
      <Container>
        <Row>
        
    <Col>checkbox</Col>
    <Col>Name</Col>
    <Col>Address</Col>
  </Row>
        
      
      <AddressGroupList addressData={getAddress} />

      </Container>
    </div>
  )
}

export default AddAddressGroup;