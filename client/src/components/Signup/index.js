import React from 'react';
import { Form, Row, Container, Button } from 'react-bootstrap';


    function Signup(props) {
    return (
        <Container>
        <Form>
            <Row>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange= {props.handleInputChange} name = "email" type="email" placeholder="Enter email" />
            </Form.Group>
            </Row><Row>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control onChange= {props.handleInputChange} name = "password"  type="password" placeholder="Password" />
            </Form.Group>
            </Row><Row>
            <Form.Group controlId="formGroupPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </Row><Row>
            <Form.Group controlId="formGroupAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange= {props.handleInputChange} name = "address" placeholder="1234 Main St" />
            </Form.Group>
            <Form.Group controlId="formGroupPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control onChange= {props.handleInputChange} name = "phone" type="phone" placeholder="555-555-5555" />
            </Form.Group>
            </Row><Row>
                <Form.Control onChange= {props.handleInputChange} name = "firstName" placeholder="First name" />
                <Form.Control onChange= {props.handleInputChange} name = "lastName" placeholder="Last name" />
                <Form.Control onChange= {props.handleInputChange} name = "middleInitial" placeholder="Middle Initial" />
            </Row><Row>
                {/* <Datepicker onChange= {props.handleInputChange} name = "birthday" /> */}
                <Form.Group controlId="formGroupBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control onChange= {props.handleInputChange} name = "birthday" type="birthday" placeholder="1/1/1900" />
            </Form.Group>
            </Row>
            <Button onClick = {props.handleSubmit()}>Submit</Button>
            
        </Form>
        </Container>
    )
};

export default Signup;