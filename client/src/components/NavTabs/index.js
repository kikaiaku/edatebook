import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

function NavTabs() {
  return (
    <Navbar expand="lg" className="universal-nav">
      <Navbar.Brand className="pacify" href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="add" to="AddressBook">Address Book</Link>
          <Link className="addnc" to="AddContact">Add New Contact</Link>
          <Link className="addnc" to="AddAddressGroup">Add New Group</Link>
          <Link className="cal" to="Calendar">Calendar</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default NavTabs;