import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Hooks/useAuth';

const Navigator = () => {
    const auth = useAuth();

    return (
        <nav>
            { auth.user ? (
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li onClick={() => auth.logout()}>Log Out</li>
                </ul>
                ) : (
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/login'>Log In</NavLink></li>
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                </ul>
            )}
        </nav>
    );
}

export default Navigator;
