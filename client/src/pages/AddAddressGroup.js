import React, { useEffect, useState } from 'react';
import AddressGroupList from '../components/AddressGroupList';
import API from '../utils/API';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

function AddAddressGroup() {

  const [addressState, setAddressState] = useState([{}]);
  const [checkedState, setCheckedState] = useState(false);

  // const userId = sessionStorage.getItem("id")

  useEffect(() => {
    getAllAddress();
  }, []);

  function getAllAddress() {
    API.getAddress()
      .then(({ data }) => {
        setAddressState(data)
        console.log(data)
      })
  }

  function handleCheck(e) {
    console.log(e.target.dataset.index)

  }

  return (
    <div>
      <AddressGroupList
        addressData={addressState}
        checkedState={handleCheck}
      />
    </div>
  )
}

export default AddAddressGroup;