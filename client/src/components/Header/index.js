import React from 'react';
import './style.css';
import Image from 'react-bootstrap/Image';
import backgroundImage from './assets/header_bkgd2.jpg';

function Header(){
    return(
        <header className='header'>
            <Image src={backgroundImage} fluid/> 
        </header>
    )
}

export default Header;