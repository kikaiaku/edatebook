import React, { useEffect, useState } from 'react';
import AddressListGroup from '../components/AddressListGroup';
import API from '../utils/API';
import { Button, Card, ListGroup, ListGroupItem, Form, FormControl } from 'react-bootstrap';


function AddressBookGroup() {

  const [getAddress, setGetAddress] = useState([{}])
  const [matched, setMatched] = useState([{}])
  const [searchName, setSearchName] = useState()
  const groupId = sessionStorage.getItem("groupId")

  useEffect(() => {
    getAllAddress();
  }, []);

  function getAllAddress(c) {
    API.getGroupAddress({ GroupNameId: groupId })
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
    <div>
      <Button onClick={() => API.exportGroup({ GroupNameId: groupId })}>Export Address Book</Button>
      <Form inline>
        <FormControl type="text" placeholder="Search Name" className="mr-sm-2,searchbar" onChange={handleInput} />
        <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
        <Button variant="outline-success" onClick={getAllAddress}>Clear Filter</Button>
      </Form>
      <AddressListGroup addressData={matched} />
    </div>

  )
}

export default AddressBookGroup;