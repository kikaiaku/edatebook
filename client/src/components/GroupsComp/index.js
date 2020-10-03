import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button, Card, ListGroup } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';


function GroupsComp() {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Header>Group Name</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>first name</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Button>Delete</Button>
        </Card>
        </div>
    )
}

export default GroupsComp;