import React, {useEffect, useState, useCallback} from 'react';
import moment, {
    getDayOfMonth,
    getMonthDayYear,
    getMonth,
    getYear,
  } from 'moment';
import CalendarComp from '../components/CalendarComp'; 
import AddEvent from '../components/AddEvent';
import API from '../utils/API';

function Calendar(){
    //handles the closing of event form popover
    const handleClose = () => setShowEventModal(false);
    const [tile, setTile] = useState();
    const tileContent = [];
    const [showEventModal, setShowEventModal] = useState(false);

    const CURRENT_DATE = moment().toDate();
    const getDayOfMonth = (month) => {
        return moment(month, 'MM').daysInMonth();
        console.log("it worked")
    };

    useEffect(() => {
        if (CURRENT_DATE){
            return(
                console.log(CURRENT_DATE)
            )
        }
    });

    function handleClick(event){
        let el = event.target;
        if (event.target.type) {
            el = event.target.children[0]
        }
        console.log(el.getAttribute("aria-label"))
        setShowEventModal(true);
    };

    return(
        <div>
        <div onClick= {handleClick}>
            <CalendarComp />
        </div>
        <AddEvent showEventModal={showEventModal} handleClose={handleClose}/>
        </div>

    )
    };
    export default Calendar;