import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css"

function Login(props) {
    return (
        <div className="divLogin">
            
            <Container>
                <Row>
                    <Col className= '4 of 9'></Col>
                    <Col className= '5 of 9 space'> 
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" onChange={props.handleInputChange}placeholder="Enter email" />
                            <Form.Text className="text-muted textColor">
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
                            <Button className="button" onClick={()=>props.handleSubmit()}>
                                Login
                            </Button>
                            </Link>
                            <Link to="/signup">
                            <Button className="button">
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