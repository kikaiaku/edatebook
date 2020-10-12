import React from 'react';
import { Col, Form, Row, Container, Button } from 'react-bootstrap';
import "./style.css";

function Signup(props) {
    return (
        <div >

        <Container>
            <Form>
                <Row>
                    <Form.Group controlId="formGroupEmail" className="sizeFix">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row><Row>
                    <Form.Group controlId="formGroupPassword"  className="sizeFix">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                </Row><Row>
                    <Form.Group controlId="formGroupPassword2" className="sizeFix">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row><Row>
                    <Form.Group controlId="formGroupAddress"  className="sizeFix">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="address" placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupAddress"  className="sizeFix">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="city" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" className="sizeFix">
                        <Form.Label>State</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="state" as="select" defaultValue="Choose...">
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

                    <Form.Group as={Col} controlId="formGridZip" className="sizeFix" >
                        <Form.Label>Zip</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="zipCode" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPhone" className="sizeFix">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="phone" type="phone" placeholder="555-555-5555" />
                    </Form.Group>
                </Row><Row>
                    <Form.Control className="AddressSpace" onChange={props.handleInputChange} name="firstName" placeholder="First name" />
                    <Form.Control className="AddressSpace" onChange={props.handleInputChange} name="lastName" placeholder="Last name" />
                    <Form.Control className="AddressSpace" onChange={props.handleInputChange} name="middleInitial" placeholder="Middle Initial" />
                </Row><Row>
                    <Form.Group controlId="formGroupBirthday" className="sizeFix">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control onChange={props.handleInputChange} name="birthday" type="birthday" placeholder="1/1/1900" />
                    </Form.Group>
                </Row>
                
                <Button  onClick={props.handleSubmit}>Submit</Button>

            </Form>
        </Container>
        </div>
    )
};

export default Signup;