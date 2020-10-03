import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button, Card, ListGroup } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import API from '../../utils/API';


function GroupsComp({ groupData }) {
    return (
        <div>
            {
                groupData.map((group) => (
        <Card style={{ width: '18rem' }}>
        <Card.Header>{group.groupName}</Card.Header>
            
        <Button className="DeleteB" value={group.id} onClick={() => API.deleteGroup({ id: group.id })} variant="primary" type="submit">Delete</Button>
        </Card>
                )
                )}
        </div>
    )
}

export default GroupsComp;