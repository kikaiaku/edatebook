import React, { useEffect, useState } from 'react';
import AddressGroupList from '../components/AddressGroupList';
import API from '../utils/API';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

function AddAddressGroup() {

  const [addressState, setAddressState] = useState([{}]);
  const [groupList, setGroupList] = useState([])

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

  //Save group function
  function handleCheck(e){
    let index = e.target.dataset.index
    if (e.target.checked) {
        let user = addressState[index]
        user.oldIndex = e.target.dataset.index
        let newArr = groupList
        // console.log(user)
        // console.log('before: ', newArr)
        newArr.push(user)
        // console.log('after: ', newArr)
        //[user.oldIndex]
        setGroupList(newArr)
        console.log("checked",groupList)
    }
    else if (!e.target.checked) {
        let group = groupList.filter(item => {
            if (item.oldIndex !== e.target.dataset.index) {
                return item
            }
        })
        console.log("group", group)
        setGroupList(group)
    }
    console.log('unchecked' ,groupList)
}

function handleInputChange(e){
  let groupName= e.target.value
  console.log(groupName);
}

// function saveGroup(){
//   API.
// }

  return (
    <div>
      <AddressGroupList
        addressData={addressState}
        checkedState={handleCheck}
        // onClick={saveGroup}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default AddAddressGroup;