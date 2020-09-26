import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            
            <Container>
                <Row>
                    <Col className= '4 of 9'></Col>
                    <Col className= '5 of 9'> 
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" onChange={props.handleInputChange}placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"name="password" onChange={props.handleInputChange}placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                        {/* <Form.Check type="checkbox" label="Check me out" /> */}
                        </Form.Group>
                        <Link to="/AddressBook">
                            <Button onClick={()=>props.handleSubmit()}>
                                Login
                            </Button>
                            </Link>
                            <Link to="/signup">
                            <Button>
                            sign up
                                </Button>
                                </Link>
                          
                    </Form>
                    </Col>
                    <Col className= '4 of 9'></Col>
                </Row>
            </Container>
        </div>
    )


}

export default Login;