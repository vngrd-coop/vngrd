import React from 'react';
import { useAuth } from './Hooks/useAuth';

function MainPage(props) {
    const auth = useAuth();

    return (
        <div>
            { auth.user ? (
                <p>Hello { auth.user } </p> 
            ) : (
                <p>Not logged in</p>
            )
            }
        </div>
    );
}

export default MainPage;
