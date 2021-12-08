import React from "react";
import { Link, BrowserRouter as  Router } from "react-router-dom";

function Navigation() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
      </ul>
    </Router>
  );
}

export default Navigation;
