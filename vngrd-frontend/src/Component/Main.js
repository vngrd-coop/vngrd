import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';


const Main = () => (
    <Switch>
        <Route exact path='/' component={MainPage}></Route>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route exact path='/signup' component={SignupPage}></Route>
    </Switch>
);

export default Main;

