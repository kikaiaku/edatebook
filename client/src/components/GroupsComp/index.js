import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button, Card, ListGroup } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import API from '../../utils/API';
import { Link } from 'react-router-dom';

function GroupsComp({ groupData }) {
    return (
        <div>
            {
                groupData.map((group) => (
        <Card style={{ width: '18rem' }}>
        <Card.Header>{group.groupName}</Card.Header>
        <Link className="add" to="AddressBookGroup">
        <Button className="DeleteB" value={group.id} onClick={() => sessionStorage.setItem("groupId",group.id)}variant="primary" type="submit">View Group</Button>   
        </Link>
        <Button className="DeleteB" value={group.id} onClick={() => API.deleteGroup({ id: group.id })} variant="primary" type="submit">Delete</Button>
        </Card>
                )
                )}
        </div>
    )
}

export default GroupsComp;