import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import AllPosts from "./AllPosts/"

function Nav(props) {
  const logged_out_nav = (
  <Router>
    <ul>
      <li onClick={() => props.display_form('login')}>login</li>
      <li onClick={() => props.display_form('signup')}>signup</li>
      <li>
        <Link to="/all_posts">All posts</Link>
      </li>
      <Route path="/all_posts" component={AllPosts} />
    </ul>
  </Router>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
