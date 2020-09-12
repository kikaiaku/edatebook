import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './style.css';

function BigCalendarComp(){
    const [value, onChange] = useState(new Date());

    return (
        <div>
          <Calendar
            onChange={onChange}
            value={value}
            style={{ height: 500 }}
          />
        </div>
      );
    };

export default BigCalendarComp;