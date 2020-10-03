import React from 'react';
// import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Row, Col, InputGroup} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import API from '../../utils/API';

// import NewAddressForm from '../NewAddressForm';
// import AddressBook from '../../pages/AddressBook';

function AddressGroupList({ addressData }) {

  return (
    <div>
      {
        addressData.map((address) => (

          <Row>

            <Col> <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>

            </InputGroup>Add to Group</Col>
            <Col>{address.firstName} {address.middleInitial} {address.lastName}</Col>
            <Col>{address.address}, {address.city}, {address.state}, {address.zipCode}</Col>
          </Row>

        )

        )}

    </div>
  )
}



export default AddressGroupList;