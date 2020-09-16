import React, {useEffect, useState, useCallback} from 'react';
import CalendarComp from '../components/CalendarComp'; 
import AddEvent from '../components/AddEvent';
import API from '../utils/API';


function Calendar(){
        const [events, setEvents] = useState([]);
        // const [newEvent, setNewEvent] = useState({});

        let tempEvents = [{title: "first event", content: "event content"},{}]
    
        const loadEvents = useCallback(()=>{
            setEvents(tempEvents)
            // API.getEvents()
            // .then(res => {
            //     setEvents(res.data)
            // })
            // .catch(err => console.log(err));
        }, [tempEvents])

        useEffect(() => {
            //make the api call, and then
            loadEvents()
            }, [loadEvents])

        // function handleInputChange(event) {
        //     const { name, value } = event.target;
        //     setNewEvent({...newEvent, [name]: value})
        //   };
        
        // function addNewEvent(event){
        //     event.preventDefault();
        //     if (newEvent.eventName && newEvent.eventContent){
        //         API.addEvent({
        //             title: newEvent.eventName,
        //             newEvent: newEvent.eventContent,
        //             time: newEvent.time
        //         }).catch(err => console.log(err));
        //     }
        // }
        // function changeEvent(event){
        //     event.preventDefault();
        //     API.updateEvent(event.target.value)
        //     .then(addNewEvent())
        //     .catch(err => console.log(err));
        // }

    return(
        <div>
            <CalendarComp />
        </div>
    )
}

export default Calendar;