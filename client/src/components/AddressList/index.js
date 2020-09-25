import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../../utils/API';

// import NewAddressForm from '../NewAddressForm';
// import AddressBook from '../../pages/AddressBook';

function AddressList({ addressData},deleteAddress) {
    console.log("Check")
    console.log(addressData)
    console.log("Check")
    return (
        <div>
            {
                addressData.map((address) => (
                    <Card>
                        <Card.Body>
                            <Card.Title>{address.firstName}
                            {address.middleInitial}
                            {address.lastName}</Card.Title>
                            <ListGroup className="list-group-flush">

                      
                                <ListGroupItem>Email: {address.email}</ListGroupItem>
                                <ListGroupItem>Phone: {address.phone}</ListGroupItem>
                                <ListGroupItem>Birthday: {address.birthday}</ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem>Street: {address.address}, {address.city}, {address.state}, {address.zipCode}</ListGroupItem>
                                <ListGroupItem>{address.comments}</ListGroupItem>

                            </ListGroup>

                            <Button value = {address.id} onClick={() => console.log(address.id)}  variant="primary" type="submit">Edit</Button>
                            <Button value = {address.id} onClick={() => API.deleteAddress({id: address.id})} variant="primary" type="submit">Delete</Button>

                        </Card.Body>
                    </Card>
                ))
            }
        </div>

        //add edit button and delete button
        
    )
}



export default AddressList;