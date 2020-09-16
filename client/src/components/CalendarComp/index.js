import React, { useState } from 'react';
import './style.css';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


function CalendarComp(){
    const [value, onChange] = useState(new Date());

    return (
        <div>
          <Calendar
            onChange={onChange}
            value={value}
            />
          {/* <button className='addEvent'>Add</button> */}
        </div>
      );
    };

export default CalendarComp;