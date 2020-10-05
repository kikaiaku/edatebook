import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import API from "../utils/API"
import NavTabs from '../components/NavTabs'
import Header from '../components/Header';

function Home() {

    return (

            <div id="myDIV">
            <Login />
            </div>
        

    )

}

export default Home;