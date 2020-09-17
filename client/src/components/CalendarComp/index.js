import React, { useState } from 'react';
import './style.css';
import Calendar from 'react-calendar';
import moment from 'moment';
// import 'react-calendar/dist/Calendar.css';


function CalendarComp(props){
    const [value, onChange] = useState(new Date());

    return (
        <div>
          <Calendar
            onChange={props.onChange}
            value={props.value}
            // tileContent={props.tileContent}
            />
        </div>
      );
    };

export default CalendarComp;