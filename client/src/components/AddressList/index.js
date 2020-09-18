import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import NewAddressForm from '../NewAddressForm';
// import AddressBook from '../../pages/AddressBook';

function AddressList(props) {
    console.log(props.addressData.data)
    return (
        <div>
            <Card>
                <Card.Header>{props.firsName}{props.middleInitial}{props.lastName}</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{props.email}</ListGroupItem>
                            <ListGroupItem>{props.phone}</ListGroupItem>
                            <ListGroupItem>{props.birthday}</ListGroupItem>
                            <ListGroupItem>{props.address}</ListGroupItem>
                            <ListGroupItem>{props.city}{props.state}{props.zipCode}</ListGroupItem>
                            <ListGroupItem>{props.phone}</ListGroupItem>
                        </ListGroup>
                        <Button variant="primary">Edit</Button>
                    </Card.Body>
            </Card>
        </div>

        //add edit button and delete button
        
    )
}



export default AddressList;