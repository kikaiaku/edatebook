import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
// import BigCalendar from 'react-big-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import API from '../../utils/API';
// import 'react-calendar/dist/Calendar.css';
// import './style.css';
// import moment from 'moment';

function EditModal(props) {

    return (
        <Modal show={props.showEditModalState} backdrop="static" onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.savedTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form className="eventForm">
                    <Form.Group controlId="formEventName">
                        {/* <Form.Label>{props.savedTitle}</Form.Label> */}
                        <Form.Control onChange={props.handleInputChange} name="title" type="text" placeholder="New Title"/>
                    </Form.Group>

                    <Form.Group controlId="formDateTime">
                        <Form.Label>Start</Form.Label>
                        <br></br>
                        <p>Start Date: {props.savedStartDate}</p>
                        <DatePicker selected={props.startDate}
                            onChange={props.handleStartChange}
                        />
                        <br></br>
                        <p>Start Time: {props.savedStartTime}</p>
                        <TimePicker
                            onChange={props.start}
                            value={props.startValue}
                        />
                        <br></br>
                        <Form.Label>End</Form.Label>
                        <br></br>
                        <p>End Date: {props.savedEndDate}</p>
                        <br></br>
                        <DatePicker selected={props.endDate}
                            onChange={props.handleEndChange}
                        />
                        <br></br>
                        <p>End Time: {props.savedEndTime}</p>
                        <br></br>
                        <TimePicker
                            onChange={props.end}
                            value={props.endValue}
                        />
                    </Form.Group>
                    <Form.Group controlId="formNotes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={props.handleInputChange} name="notes" type="text" placeholder={props.savedNotes} />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleDelete}>Delete</Button>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button
                    onClick={props.handleSubmitEdit}
                    variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )

}

//() => props.setShowEditModalState(false)

// () => API.deleteAddress({id: props.endValue}

export default EditModal;