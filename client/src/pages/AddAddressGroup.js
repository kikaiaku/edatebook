import React, { useEffect, useState } from 'react';
import AddressGroupList from '../components/AddressGroupList';
import API from '../utils/API';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

function AddAddressGroup() {

  const [addressState, setAddressState] = useState([{}]);
  const [groupList, setGroupList] = useState([])
  const [groupName, setGroupName] = useState()
  const userId = sessionStorage.getItem("id")

  useEffect(() => {
    getAllAddress();
  }, []);

  function getAllAddress() {
    API.getAddress2()
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
  setGroupName(groupName)
}

function handleSubmit(e) {
  e.preventDefault();
  console.log("check")
  API.createGroupName({
    groupName: groupName,
    userId: userId
  })


  const updateGroup = groupList.map(o => Object.assign({}, o, {GroupNameId: 1}))
//   let g2= groupList
//   g2.forEach(o => o.categoryid = 1);
//     Object.assign(groupList,[{categoryId: 1}])
// // let test2 = groupList.add({categoryId: 1})
// //   groupList.push({categoryId: 1})
//   console.log(groupList)
//   console.log("g2")
//   console.log(g2)
//   console.log("newP")
  console.log(updateGroup)
  API.addGroup(updateGroup)
    .catch(err => console.log(err));
};

  return (
    <div>
      <AddressGroupList
        addressData={addressState}
        checkedState={handleCheck}
        // onClick={saveGroup}
        onChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default AddAddressGroup;