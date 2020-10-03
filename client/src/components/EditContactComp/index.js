import React, { useEffect, useState } from 'react';
import { Container, Form, Col, Row, Label, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function EditContactComp({ handleInputChange, handleSubmit, address, firstName, middleInitial, lastName, email, phone, birthday, city, state, zipCode, comments }) {

    return (

        <Container className="newBody">
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Control onChange={handleInputChange} name="firstName" placeholder={firstName} value={firstName} >

                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control onChange={handleInputChange} name="middleInitial" value={middleInitial} />
                    </Col>
                    <Col>
                        <Form.Control onChange={handleInputChange} name="lastName" value={lastName} />
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" className="sizeFixNew">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={handleInputChange} name="email" type="email" value={email}>

                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone" className="sizeFixNew">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={handleInputChange} name="phone" type="phone" value={phone} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridBirthday" className="sizeFixNew">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control onChange={handleInputChange} name="birthday" type="birthday" value={birthday} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress" className="sizeFixNew">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={handleInputChange} name="address" placeholder={address} value={address} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity" className="sizeFixNew">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={handleInputChange} name="city" value={city} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" className="sizeFixNew">
                        <Form.Label>State</Form.Label>
                        <Form.Control onChange={handleInputChange} name="state" as="select" value={state}>
                            <option>Choose...</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip" className="sizeFixNew">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control onChange={handleInputChange} name="zipCode" value={zipCode} />
                    </Form.Group>

                </Form.Row>
                <Form.Group as={Col} controlId="formGridZip" className="sizeFixNew">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control onChange={handleInputChange} name="comments" value={comments} />
                </Form.Group>

                <Button onClick={handleSubmit} variant="primary" type="submit">

                    <Link className="add" to="AddressBook"> Submit </Link>

                </Button>

            </Form>
        </Container>

    )
};

export default EditContactComp;
