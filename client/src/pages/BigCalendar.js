import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import BigCalendarComp from "../components/BigCalendarComp";
import "react-big-calendar/lib/css/react-big-calendar.css";
import API from "../utils/API";

const localizer = momentLocalizer(moment);

function BigCalendar(){
    const [eventState, setEventState] = useState([
        {
                  start: moment().toDate(),
                  end: moment()
                      .add(1, 'hours'),
                  title: 'Some Event'
              },{
                  start: moment().toDate(),
                  end: moment()
                      .add(1, 'hours'),
                  title: 'Another Event'
              },{
                  start: moment().toDate(),
                  end: moment()
                      .add(1, 'hours'),
                  title: 'What?? Event'
              },{
                  start: moment().toDate(),
                  end: moment()
                      .add(1, 'hours'),
                  title: 'Da Event'
              }
    ])
       
    // useEffect(()=>{
    //     API.getEvent()
    //     .then(data => {
    //         setEventState(data)
    //     })
    // }, [])
    
    return(
        <div>
            <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={eventState}
            style={{ height: "100vh" }}
            />
        </div>
    )
}

export default BigCalendar;