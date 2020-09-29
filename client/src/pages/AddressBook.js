import React, { useEffect, useState } from 'react';
import AddressList from '../components/AddressList';
import API from '../utils/API';
import { Button} from 'react-bootstrap';

function AddressBook() {

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


    return(
        <div>
        {/* <NewAddressForm handleInputChange = {handleInputChange} handleSubmit = {handleSubmit}/> */}
        <Button onClick={() => API.getAddress2()}>test</Button>
        <AddressList addressData = {getAddress}  />
        </div>
    )
}

export default AddressBook;