import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import "./style.css"
import API from "../../utils/API"


function Login(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [redirect, setRedirect ] = useState(false)

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
        console.log("Handle submit check")
        let data = {
            email: email, password: password
        }
        API.loginApp(data).then(response => {
            console.log(response)
            console.log("login response")
            sessionStorage.setItem("id", response.data.id)
            setRedirect(true)
         })
         
    }

    return (
        <div>
        {redirect? <Redirect to="/Calendar"/> :null};
        <div>
            <h1 className="welcome">Welcome to eDatebook</h1>
            <p className="slogan">
                Social. Organize. Easy.
            </p>
            <Container>
                <Row>
                    <Col className='4 of 9'></Col>
                    <Col className='5 of 9 space'>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="para2">Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleInputChange} placeholder="Enter email" />
                                <Form.Text id='myDIV'className="text-muted textColor">
                            </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="para2">Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={handleInputChange} placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                {/* <Form.Check type="checkbox" label="Check me out" /> */}
                            </Form.Group>
                                <Button className="button" onClick={handleSubmit}>
                                    Login
                            </Button>
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
        </div>
    )


}

export default Login;