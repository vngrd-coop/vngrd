import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigator = () => (
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Log In</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
        </ul>
    </nav>
);

export default Navigator;
