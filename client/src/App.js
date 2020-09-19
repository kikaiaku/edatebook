import React from 'react';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Calendar from './pages/Calendar';
import AddressBook from './pages/AddressBook';
import Datepicker from './components/Datepicker';
import SignUp from './pages/SignUp';
import BigCalendarComp from './components/BigCalendarComp';
import EventList from './pages/EventList';
import EventListComp from './components/EventListComp';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <NavTabs />
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/Profile' exact component={Profile} />
        <Route path='/Calendar' exact component={Calendar} />
        <Route path='/Calendar' exact component={EventList} />
        <Route path='/AddressBook' exact component={AddressBook} />
    </div>
    </Router>

  )
}

export default App;
