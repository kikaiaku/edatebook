import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
// import BigCalendar from 'react-big-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
// import 'react-calendar/dist/Calendar.css';
import './style.css';
// import moment from 'moment';

function AddEvent(props) {

    return (
        <Modal show={props.showEventModal} backdrop="static" onHide={() => props.setShowEventModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add Event</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form className="eventForm">
                    <Form.Group controlId="formEventName">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="title" type="text" placeholder="Name Event" />
                    </Form.Group>

                    <Form.Group controlId="formDateTime">
                        <Form.Label>Start</Form.Label>
                        <br></br>
                        <DatePicker selected={props.startDate}
                            onChange={props.handleStartChange}
                        // dateFormat={props.dateFormat}
                        />

                        <TimePicker
                            onChange={props.start}
                            value={props.startValue}
                        />
                        <br></br>
                        <Form.Label>End</Form.Label>
                        <br></br>
                        <DatePicker selected={props.endDate}
                            onChange={props.handleEndChange}
                        />


                        <TimePicker
                            onChange={props.end}
                            value={props.endValue}
                        />
                    </Form.Group>
                    <Form.Group controlId="formNotes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={props.handleInputChange} name="notes" type="text" placeholder="Notes" />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.setShowEventModal(false)}>Close</Button>
                <Button
                    onClick={props.handleSubmit}
                    variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default AddEvent;