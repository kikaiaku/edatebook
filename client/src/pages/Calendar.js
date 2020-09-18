import React, { useEffect, useState, useCallback } from 'react';
import moment, {
    getDayOfMonth,
    getMonthDayYear,
    getMonth,
    getYear,
} from 'moment';
import CalendarComp from '../components/CalendarComp';
import AddEvent from '../components/AddEvent';
import API from '../utils/API';

function Calendar() {
    const [eventName, setEventName] = useState()
    const [notes, setNotes] = useState()
    const [time, setTime] = useState()


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
        if (CURRENT_DATE) {
            return (
                console.log(CURRENT_DATE)
            )
        }
    });
    function handleSubmit(e) {
        e.preventDefault();
        console.log("handle submit clicked")

        API.addEvent({
            eventName: eventName,
            time: time,
            notes: notes
        })
            // .then(res => loadBooks())
            .catch(err => console.log(err));

    };
    function handleInputChange(e) {
        let name = e.target.name
        let value = e.target.value
        console.log(name)
        console.log(value)
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
    }
        function handleClick(event) {
            let el = event.target;
            if (event.target.type) {
                el = event.target.children[0]
            }
            console.log(el.getAttribute("aria-label"))
            setShowEventModal(true);
        };

        return (
            <div>
                <div onClick={handleClick}>
                    <CalendarComp />
                </div>
                <AddEvent showEventModal={showEventModal} handleClose={handleClose} handleInputChange = {handleInputChange} handleSubmit = {()=>handleSubmit} />
            </div>

        )
    };
    export default Calendar;