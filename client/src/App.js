import React from 'react';
// import Signup from './components/Signup';	
import { BrowserRouter as Router, Route } from 'react-router-dom';	
import './App.css';	
// import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddressBook from './pages/AddressBook';
import SignUp from './pages/SignUp';
import BigCalendar from './pages/BigCalendar';
import AddContact from './pages/AddContact';
import AddAddressGroup from './pages/AddAddressGroup';
import EditContact from './pages/EditContact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/Profile' exact component={Profile} />
        <Route path='/Calendar' exact component={BigCalendar} />
        <Route path='/AddressBook' exact component={AddressBook} />
       <Route path='/AddContact' exact component={AddContact} />
       <Route path='/AddAddressGroup' exact component={AddAddressGroup} />
       <Route path='/EditContact' exact component={EditContact} />

    </div>

    </Router>

  )
}

export default App;
