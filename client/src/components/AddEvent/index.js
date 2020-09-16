import React, { useState } from 'react';
// import Calendar from 'react-calendar';

function AddEvent(){
    const [value, onChange] = useState(new Date());
    const [event, setNewEvent] = useState(new Event());

    useEffect(() => {
        loadEvents()
        }, [])

    // function addNewEvent(){
    //     return(
    //         <div>

    //         </div>
    //     )
    // }

    return (
        <div>
          <Calendar
            onClickDay={console.log("double clicked")}
            onChange={onChange}
            value={value}
            />
        </div>
    )
}

export default AddEvent;