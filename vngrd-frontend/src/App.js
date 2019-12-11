import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom"

import AllPosts from "./Component/AllPosts/index"

class App extends Component {
    render() {
	return (
		<Router>
		  <Route path="/" exact component={AllPosts} />
		</Router>
	);
    }
}

export default App;
