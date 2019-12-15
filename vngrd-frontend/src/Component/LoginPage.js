import React, { useState } from 'react'
import { useAuth } from './Hooks/useAuth.js'

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();

    return (
        <form onSubmit={() => auth.login(username, password)}>
            <h4>Log In</h4>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                name='username'
                value={username}
                onChange={() => setUsername(username)}
            />
            <label htmlFor='password'>Password</label>
            <input
                type='text'
                name='password'
                value={password}
                onChange={() => setPassword(password)}
            />
            <input type='submit' />
        </form>
    );
}

export default LoginPage;
