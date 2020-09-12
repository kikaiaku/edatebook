import React from 'react';
import Signup from '../components/Signup';
import Datepicker from '../components/Datepicker'
import Header from '../components/Header';
import NavTabs from '../components/NavTabs';

function SignUp() {
    return (
        <div>
            <Header />
            <NavTabs />
            <Signup />
            <Datepicker />
        </div>
    )
}

export default SignUp