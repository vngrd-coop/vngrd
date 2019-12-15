import React, { useState } from 'react'
import { useAuth } from './Hooks/useAuth.js'

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();

    const handleChange = e => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        }
        else { // password
            setPassword(e.target.value);
        }
    };

    return (
        <form onSubmit={(e) => auth.login(e, username, password)}>
            <h4>Log In</h4>
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
