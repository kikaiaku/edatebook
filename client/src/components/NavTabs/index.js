import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './style.css'

function NavTabs() {
  return (
    <Navbar bg="light" expand="lg" className="universal-nav">
      <Navbar.Brand className="pacify" href="/">Login</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Link className="pro" to="Profile">Profile</Link> */}
          <Link className="add" to="AddressBook">Address Book</Link>
          {/* <Link className="addn" to="">Add New Event</Link> */}
          <Link className="addnc" to="AddContact">Add New Contact</Link>
          <Link className="addnc" to="AddAddressGroup">Add New Group</Link>
         <Link className="cal" to="Calendar">Calendar</Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
          {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
          {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
      {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar >
    )
}

export default NavTabs;