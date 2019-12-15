import React from 'react';
import './App.css'
import Navigator from './Component/Navigator'
import Main from './Component/Main'
import { ProvideAuth } from './Component/Hooks/useAuth.js'

const App = () => (
    <div className='app'>
        <h1> App.js </h1>
        <ProvideAuth>
            <Navigator />
            <Main />
        </ProvideAuth>
    </div>
);

export default App;
