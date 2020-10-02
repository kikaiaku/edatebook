import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import AddEvent from "../components/AddEvent";
import EventModal from "../components/EventModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import API from "../utils/API";
import DayModal from "../components/DayModal";

const localizer = momentLocalizer(moment);

function BigCalendar() {

    const userId = sessionStorage.getItem("id")
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

    //Day Modal add event form
    const [showDayModal, setShowDayModal] = useState(false);
    const [dayStartDate, setDayStartDate] = useState();
    const [dayEndDate, setDayEndDate] = useState();


    //Event State for add event
    const [eventState, setEventState] = useState([]);

    //EventModal
    const [eventModalState, setEventModalState] = useState(false)
    const [event, setEvent] = useState({
        id: "",
        title: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        notes: "",
        start: "",
        end: ""
    });

    //Gets all events
    useEffect(() => {
        API.getEvent()
            .then(({ data }) => {
                renderEvents(data);
            }).catch(err => console.log(err));
    }, []);

    function getEvents() {
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
            notes: noteState,
            userId: userId
        })
        console.log('now close modal and get events', res)
        setShowEventModal(false)
        getEvents(data => renderEvents(data))
    };
    //Edit Event function
    async function handleSubmitEdit(e) {
        e.preventDefault();
        console.log("handle submit clicked")
        const res = await API.editEvent({
            title: titleState,
            startDate: startDate,
            endDate: endDate,
            startTime: startTime,
            endTime: endTime,
            notes: noteState,
            userId: userId,
            id: sessionStorage.getItem("eventId")  
        })
        console.log('now close modal and get events', res)
        setShowEventModal(false)
        getEvents(data => renderEvents(data))
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

    function onSelectEvent(e) {
        sessionStorage.setItem("eventId",e.id)
        console.log(e)
        setEvent(e)
        setEventModalState(true)
    };

    //Day slot add event handler
    function onSelectSlot(day) {
        setDayStartDate(day.start)
        setDayEndDate(day.end)
        setShowDayModal(true);
        console.log("day clicked: ", day.start)
    };
    ///////////

    return (
        <div>
            <button className='addEvent' onClick={handleClick} >Add Event</button>
            
            <DayModal
            dayStartDate={moment(dayStartDate).format('MM/DD/YYYY')}
            dayEndDate={moment(dayEndDate).format('MM/DD/YYYY')}
                    //DatePicker
                    handleStartChange={handleStartChange}
                    handleEndChange={handleEndChange}
                    startDate={startDate}
                    endDate={endDate}

                    showDayModal={showDayModal}
                    setShowDayModal={setShowDayModal}
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
            
            <AddEvent
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
                selectable={true}
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
                // (slotInfo) => console.log(slotInfo)}
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={eventState}
                style={{ height: "100vh" }}

                startAccessor="start"
                endAccessor="end"
            />
            <EventModal
                id={event.id}
                eventModalState={eventModalState}
                setEventModalState={setEventModalState}
                handleInputChange={handleInputChange}
                handleStartChange={handleStartChange}
                handleEndChange={handleEndChange}
                handleSubmitEdit={handleSubmitEdit}

                //Saved Event
                savedTitle={event.title}
                savedStartDate={moment(event.startDate).format('MM/DD/YYYY')}
                savedEndDate={moment(event.endDate).format('MM/DD/YYYY')}
                savedStartTime={event.startTime}
                savedEndTime={event.endTime}
                savedNotes={event.notes}
                savedStart={event.start}
                savedEnd={event.end}

                //Edit Event
                //DatePicker
                handleStartChange={handleStartChange}
                startDate={startDate}
                handleEndChange={handleEndChange}
                endDate={endDate}

                //TimePicker
                start={handleStartTime}
                startValue={startTime}
                end={handleEndTime}
                endValue={endTime}
            />

        </div>
    )
}

export default BigCalendar;