import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css";

function HomePage(props) {
    return (
        <div>
            <h1>Welcome to eDatebook.</h1>
            <p className="para1"> Where keeping up with birthdays and addresses are made easy.
            </p>
            <div className="button">
                <Link to="/Login" >
                    <Button className="button" >
                        Login
                            </Button>
                </Link>
                <Link to="/signup" >
                    <Button  className="button">
                        Sign Up
                                </Button>
                </Link>
            </div>
        </div>
    )


}

export default HomePage;