import React, { useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
// import Calendar from 'react-calendar';

function AddEvent(props) {
    // const [value, onChange] = useState(new Date());
    // const [event, setNewEvent] = useState(new Event());

    // useEffect(() => {
    //     if (!event) {
    //         return;
    //     }
    // })

    // function addNewEvent() {
        return (
            <Modal show={props.showEventModal} backdrop="static" onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Event</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form className="eventForm">
                    <Form.Group controlId="formEventName">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" placeholder="Name Event" />
                    </Form.Group>

                    <Form.Group controlId="formNotes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control type="text" placeholder="Enter Notes" />
                    </Form.Group>
                    <Form.Group controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="text" placeholder="Enter Time" />
                    </Form.Group>
            </Form>
        </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal>      
        )
    }
// }
//     return (
//         <div>
//           <Calendar
//             // onClickDay={console.log("double clicked")}
//             onChange={onChange}
//             value={value}
//             />
//         </div>
//     )
// }

export default AddEvent;