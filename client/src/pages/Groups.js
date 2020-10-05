import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import GroupsComp from '../components/GroupsComp';



function Groups(){
const [groupState, setGroupState] = useState()
const [getGroupList, setGetGroupList] = useState([{}])
useEffect(() => {
    getGroups();
  }, []);

  function getGroups(c) {
    API.getGroups()
      .then(({ data }) => {
        console.log(data)
        console.log("Check")
        setGetGroupList(data)
      })
  }

    return(
      
        <div id="myDIV">
            <GroupsComp groupData={getGroupList}
            // groupName={groupState.groupName}
            />
        </div>
        
    )
}

export default Groups;