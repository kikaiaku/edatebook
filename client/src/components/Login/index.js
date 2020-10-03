import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css"
import API from "../../utils/API"

function Login(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handleInputChange(e) {
        let name = e.target.name

        switch (name) {
            case "email":
                setEmail(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
        }

    }

    function handleSubmit() {
        let data = {
            email: email, password: password
        }
        API.loginApp(data).then(response => {
            console.log(response)
            console.log("login response")
            sessionStorage.setItem("id", response.data.id)

        })
    }

    return (
        <div className="divLogin">
            <h1>Welcome to eDatebook</h1>
            <p className="para1">
                Where we make keeping up with birthdays and addresses easy.
            </p>
            <Container>
                <Row>
                    <Col className='4 of 9'></Col>
                    <Col className='5 of 9 space'>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="para2">Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleInputChange} placeholder="Enter email" />
                                <Form.Text className="text-muted textColor">
                                    We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="para2">Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={handleInputChange} placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                {/* <Form.Check type="checkbox" label="Check me out" /> */}
                            </Form.Group>
                            <Link to="/AddressBook">
                                <Button className="button" onClick={handleSubmit}>
                                    Login
                            </Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="button">
                                    Sign Up
                                </Button>
                            </Link>

                        </Form>
                    </Col>
                    <Col className='4 of 9'></Col>
                </Row>
            </Container>
        </div>
    )


}

export default Login;