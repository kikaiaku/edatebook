import React, { useEffect, useState } from 'react';
import AddressGroupList from '../components/AddressGroupList';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

function AddAddressGroup() {

  const [addressState, setAddressState] = useState([{}]);
  const [groupList, setGroupList] = useState([]);
  const [groupName, setGroupName] = useState();
  const userId = sessionStorage.getItem("id");
  const [redirectState, setRedirectState] = useState(false);

  useEffect(() => {
    getAllAddress();
  }, []);

  function getAllAddress() {
    API.getAddress2()
      .then(({ data }) => {
        setAddressState(data)
        console.log(data)
      });
  };

  function getAllGroupNames(){

  }

  //Save group function
  function handleCheck(e){
    let index = e.target.dataset.index
    if (e.target.checked) {
        let user = addressState[index]
        let newArr = groupList
        newArr.push(user)
        setGroupList(newArr)
        console.log("checked",groupList)
    }
    else if (!e.target.checked) {
        let group = groupList.filter(item => {
            if (!e.target.dataset.index) {
                return item
            }
        });
        setGroupList(group)
    };
};

function handleInputChange(e){
  let groupName= e.target.value
  setGroupName(groupName)
};

function handleSubmit(e) {
  e.preventDefault();
  console.log("check")
  API.createGroupName({
    groupName: groupName,
    userId: userId
  });
  createGroup();
};

function createGroup(){
  API.getGroupNames() 
  .then(({ data }) => {
    var groupIdValue = data[0].id -1
    console.log("groupid: "+ groupIdValue)
  
      const updateGroup = groupList.map(o => Object.assign({}, o, {GroupNameId: groupIdValue}))
      
      API.addGroup(updateGroup)
      console.log("update group: "+ updateGroup)
      setRedirectState(true)
  })
    .catch(err => console.log(err));
};


  return (
    <div id='myDIV'>
       {redirectState? <Redirect to="/Groups"/> :null};
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