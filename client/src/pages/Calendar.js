import React, { useEffect, useState, useCallback } from 'react';
import moment, {
    getDayOfMonth,
    getMonthDayYear,
    getMonth,
    getYear,
} from 'moment';
import CalendarComp from '../components/CalendarComp';
import AddEvent from '../components/AddEvent';
import EventListComp from '../components/EventListComp';
import EventList from './EventList';
import API from '../utils/API';

function Calendar() {
    const [eventName, setEventName] = useState()
    const [notes, setNotes] = useState()
    const [time, setTime] = useState()
    const userId = sessionStorage.getItem("id")  
    const [eventDate, setEventDate] = useState()


    //handles the closing of event form popover
    const handleClose = () => setShowEventModal(false);
    const [tile, setTile] = useState();
    const tileContent = [];
    const [showEventModal, setShowEventModal] = useState(false);

    const CURRENT_DATE = moment().toDate();
    const getDayOfMonth = (month) => {
        console.log("it worked")
        return moment(month, 'MM').daysInMonth();
        
    };

    useEffect(() => {
        if (CURRENT_DATE) {
            // return (
            //     console.log(CURRENT_DATE)
            // )
        }
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log("handle submit clicked")

        API.addEvent({
            eventName: eventName,
            eventDate: eventDate,
            time: time,
            notes: notes,
            userId: userId
        })
        .catch(err => console.log(err));
    };

    function handleInputChange(e) {
        let name = e.target.name
        let value = e.target.value
        console.log(name)
        console.log(value)
        // eslint-disable-next-line default-case
        switch (name) {
            case "eventName":
                setEventName(value)
                break;
            case "notes":
                setNotes(value)
                break;
            case "time":
                setTime(value)
                break;
        }
    };

    function handleClick(event) {
        let el = event.target;
        if (event.target.type) {
            el = event.target.children[0]
        }
        setEventDate(el.getAttribute("aria-label"))
        // let eventDate = el.getAttribute("aria-label")
        console.log(el.getAttribute("aria-label"))
        setShowEventModal(true);
    };
    return (
        <div>
            <div onClick={handleClick}>
                <CalendarComp />
            </div><div>
                <EventListComp />
            </div>
            <AddEvent showEventModal={showEventModal} handleClose={handleClose} handleInputChange={handleInputChange} handleSubmit={() => handleSubmit} />
        </div>
    )
};

export default Calendar;