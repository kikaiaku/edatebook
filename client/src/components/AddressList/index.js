import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button, Card, ListGroup, ListGroupItem, Form, FormControl, Container
} from 'react-bootstrap';


import API from '../../utils/API';
import "./style.css"


// import NewAddressForm from '../NewAddressForm';
// import AddressBook from '../../pages/AddressBook';

function AddressList({ addressData }, deleteAddress) {
    console.log("Check")
    console.log(addressData)
    console.log("Check")
    return (
        <div>
            <Container>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2,searchbar" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
            {
                addressData.map((address) => (
                    <Container>
                        <Card className="AddressB">
                            <Card.Body>
                                <Card.Title className="nameTitle" >{address.firstName}
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

                                <Link to="/EditContact">
                                    <Button className="EditB" value={address.id} onClick={() => sessionStorage.setItem("addressId", address.id)} variant="primary" type="submit">Edit</Button>
                                </Link>

                                <Button className="DeleteB" value={address.id} onClick={() => API.deleteAddress({ id: address.id })} variant="primary" type="submit">Delete</Button>

                            </Card.Body>
                        </Card>
                    </Container>
                ))
            }
        </div>

        //add edit button and delete button

    )
}

export default AddressList;