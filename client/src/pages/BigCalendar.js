import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import BigCalendarComp from "../components/BigCalendarComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import API from "../utils/API";

const localizer = momentLocalizer(moment);

function BigCalendar() {

    //DatePicker
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    //TimePicker
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    //Modal add event form
    const [titleState, setTitleState] = useState();
    const [noteState, setNoteState] = useState();

    const [showEventModal, setShowEventModal] = useState(false);
    const [eventState, setEventState] = useState([]);

    //Gets all events
    useEffect(() => {
        API.getEvent()
            .then(({ data }) => {
                renderEvents(data);
            }).catch(err => console.log(err));
    }, []);

    function getEvents(){
        API.getEvent()
            .then(({ data }) => {
                renderEvents(data);
            }).catch(err => console.log(err));
    };

    //Render events to calendar
    function renderEvents(appointments) {
        console.log('---', appointments);
        for (var i = 0; i < appointments.length; i++) {
            appointments[i].start = new Date(appointments[i].startDate);
            appointments[i].end = new Date(appointments[i].endDate);
        }
        setEventState(appointments)
    }

    //TimePicker functions
    function handleStartTime(tm) {
        console.log(tm);
        setStartTime(tm);
    }

    function handleEndTime(tm) {
        console.log(tm);
        setEndTime(tm)
    }
    //DatePicker functions
    function handleStartChange(dt) {
        console.log(dt)
        setStartDate(dt);
    };

    function handleEndChange(dt) {
        console.log(dt)
        setEndDate(dt);
    };
    //Submit Add Event function
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("handle submit clicked")
        const res = await API.addEvent({
            title: titleState,
            startDate: startDate,
            endDate: endDate,
            startTime: startTime,
            endTime: endTime,
            notes: noteState
            // userId: userId
        })
        console.log('now close modal and get events', res)
        setShowEventModal(false)
        getEvents()
        
        // .then(getEvents())
           // .catch(err => console.log(err));
            // console.log("hit route")
    };
    //Title input change function
    function handleInputChange(e) {
        let name = e.target.name
        let value = e.target.value
        console.log(name)
        console.log(value)
        // eslint-disable-next-line default-case
        switch (name) {
            case "title":
                setTitleState(value)
                break;
            case "notes":
                setNoteState(value)
                break;
        }
    };

    function handleClick(event) {
        event.preventDefault();
        setShowEventModal(true);
        console.log("add event clicked")
    };

    return (
        <div>
            <button className='addEvent' onClick={handleClick} >Add Event</button>

            <BigCalendarComp

                //DatePicker
                handleStartChange={handleStartChange}
                startDate={startDate}
                handleEndChange={handleEndChange}
                endDate={endDate}
                showEventModal={showEventModal}
                setShowEventModal={setShowEventModal}
                //TimePicker
                start={handleStartTime}
                startValue={startTime}

                end={handleEndTime}
                endValue={endTime}

                //Title-Notes input handling
                handleInputChange={handleInputChange}

                //Form submit to add event
                handleSubmit={handleSubmit}
            />

            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={eventState}
                style={{ height: "100vh" }}

                startAccessor="start"
                endAccessor="end"
            />
        </div>
    )
}

export default BigCalendar;

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("handle submit clicked")
    //     setTileState(true);
    //     API.addEvent({
    //         eventName: eventName,
    //         eventDate: eventDate,
    //         time: time,
    //         notes: notes,
    //         userId: userId
    //     })
    //     .catch(err => console.log(err));
    // };
    //{id: 1, start: "today", end: "tomorrow", title: "Event07", userId: null, …}


