import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Container, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import './style.css';

function AddressGroupList(props) {

  return (
    <div>
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Group Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={props.onChange}
          />
          <InputGroup.Append>

            <Link to="/Groups">
              <Button id="save" variant="outline-secondary"
                onClick={props.handleSubmit}
              >Save Group</Button>
            </Link>

          </InputGroup.Append>
        </InputGroup>
      </Container>
      <Container id="col-names">
        <Row>
          <Col>Add To Group</Col>
          <Col>Name</Col>
          <Col>Address</Col>
        </Row>
      </Container>

      {
        props.addressData.map((address, index) => (
          <Container>
            <Row>
              <Col id="contact-list">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Checkbox
                      data-index={index}
                      aria-label="Checkbox for following text input"
                      onChange={props.checkedState}
                    />
                  </InputGroup.Prepend>
                </InputGroup>
              </Col>

              <Col id="contact-list">{address.firstName} {address.middleInitial} {address.lastName}</Col>

              <Col id="contact-list">{address.address}, {address.city}, {address.state}, {address.zipCode}</Col>
            </Row>
          </Container>
        ))}

    </div>
  )
}



export default AddressGroupList;

//add edit button and delete button