import React from 'react';
import { Form, Row, Container, Button } from 'react-bootstrap';
import Datepicker from '../Datepicker'

    function Signup() {
    return (
        <Container>
        <Form>
            <Row>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            </Row><Row>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </Row><Row>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </Row><Row>
            <Form.Group controlId="formGroupAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            </Row><Row>
                <Form.Control placeholder="First name" />
                <Form.Control placeholder="Last name" />
            </Row><Row>
                <Datepicker />
            </Row>
            <Button>Submit</Button>
            
        </Form>
        </Container>
    )
};

export default Signup;