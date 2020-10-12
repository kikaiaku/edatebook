import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './style.css';
import Switch from "react-switch";



function NavTabs(props) {
  return (
    <div>
    <Navbar expand="lg"  className="universal-nav">
      <Navbar.Brand className="pacify" href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="cal" to="Calendar">Calendar</Link>
          <Link className="add" to="AddressBook">Address Book</Link>
          <Link className="addncon" to="AddContact">Add New Contact</Link>
          <Link className="addngrp" to="AddAddressGroup">Add New Group</Link>
          <Link className="groups" to="Groups">Groups</Link>
          <Link className="groups" to="" refresh="true">Logout</Link>

        </Nav>
      </Navbar.Collapse>
      <Switch 
        onChange={props.onChange} 
        checked={props.checked} />
    </Navbar >
    </div>
  )
}

export default NavTabs;