import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import GroupsComp from '../components/GroupsComp';



function Groups(){
const [groupState, setGroupState] = useState()

// useEffect(()=>{
//     API.getGroups({data})
//     console.log(data)
//     .then(setGroupState(data))
// })

    return(
        <div>
            <GroupsComp 
            // groupName={groupState.groupName}
            />
        </div>
    )
}

export default Groups;