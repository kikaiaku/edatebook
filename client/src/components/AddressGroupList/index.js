import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Container, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';

import API from '../../utils/API';

// import NewAddressForm from '../NewAddressForm';
// import AddressBook from '../../pages/AddressBook';

function AddressGroupList(props) {

  return (
    <div>
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Group Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Save Group</Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
      <Container>
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
              <Col>
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

              <Col>{address.firstName} {address.middleInitial} {address.lastName}</Col>

              <Col>{address.address}, {address.city}, {address.state}, {address.zipCode}</Col>
            </Row>
          </Container>
        ))}
    </div>
  )
}



export default AddressGroupList;

//add edit button and delete button