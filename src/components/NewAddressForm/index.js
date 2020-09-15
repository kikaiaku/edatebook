import React from 'react';
import { Container, Form, Col, Row, Label, Button } from 'react-bootstrap';

function NewAddressForm() {
    return (
<Container>
<Form>
    <Form>
        <Form.Row>
            <Col>
                <Form.Control placeholder="First name" />
            </Col>
            <Col>
                <Form.Control placeholder="M.I." />
            </Col>
            <Col>
                <Form.Control placeholder="Last name" />
            </Col>
        </Form.Row>
    </Form>
    <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
        </Form.Group>
    </Form.Row>

    <Button variant="primary" type="submit">
        Add New
    </Button>
</Form>
</Container>
    )
};
export default NewAddressForm;