import React, { useEffect, useState } from 'react';
import AddressList from '../components/AddressList';
import API from '../utils/API';


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

      <AddressList addressData={getAddress} />
    </div>
  )
}

export default AddAddressGroup;