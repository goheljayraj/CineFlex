import React from 'react';
import './Navbar.css'
const Navbar = (props) => {
    return (

            <div className="root">
                <div className="main-container" >
                    <a href="#" onClick={() => {props.jayraj('home')}}>Home</a>
                    <a href="#" onClick={() => {props.jayraj('tvshows')}}>TV Shows</a>
                    <a href="#" onClick={() => {props.jayraj('contacts')}}>Contacts</a>
                </div>
            </div>
    );
};

export default Navbar;