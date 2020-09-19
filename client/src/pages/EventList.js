import React, { useEffect, useState } from 'react'
import EventListComp from '../components/EventListComp';
import AddEvent from '../components/AddEvent';
import API from '../utils/API';


function EventList(){
    const [eventState, setEventState] = useState([{}])

useEffect(() => {
    API.getEvent()
      .then((res) => {
        // setEventState(data)
        // console.log("hello!!!!!!!!");
        console.log(res);
    })}, []);



    
function renderEvents(){
    API.getEvent()
    .then(data => {
        setEventState(data)
        console.log(data)
    })
    .catch(err => console.log(err));
}

return(
    <div>
        <EventListComp 
            eventData = {eventState}
        />
    </div>

    )
}


export default EventList;