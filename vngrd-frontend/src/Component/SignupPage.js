import React, { useState } from 'react'
import { useAuth } from './Hooks/useAuth.js'

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();

    const handleChange = e => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        }
        else if (e.target.name === 'username') {
            setUsername(e.target.value);
        }
        else { // password
            setPassword(e.target.value);
        }
    };

    return (
        <form onSubmit={(e) => auth.signup(e, email, username, password)}>
            <h4>Log In</h4>
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
            />
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                name='username'
                value={username}
                onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
            />
            <input type='submit' />
        </form>
    );
}

export default LoginPage;
