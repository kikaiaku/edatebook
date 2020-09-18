import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import NewAddressForm from '../NewAddressForm';
// import AddressBook from '../../pages/AddressBook';

function AddressList({ addressData }) {
    console.log(addressData)
    // console.log(address.firstName)
    return (
        <div>
            {
                addressData.map((address) => (
                    <Card>
                        {/* <Card.Header>
Address
                        </Card.Header> */}
                        <Card.Body>
                            <Card.Title>{address.firstName}
                            {address.middleInitial}
                            {address.lastName}</Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{address.email}</ListGroupItem>
                                <ListGroupItem>{address.phone}</ListGroupItem>
                                <ListGroupItem>{address.birthday}</ListGroupItem>
                                <ListGroupItem>{address.address}</ListGroupItem>
                                <ListGroupItem>{address.city}{address.state}{address.zipCode}</ListGroupItem>
                                <ListGroupItem>{address.phone}</ListGroupItem>
                            </ListGroup>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>

        //add edit button and delete button
        
    )
}



export default AddressList;