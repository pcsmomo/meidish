import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="left brand-logo">
          <i className="material-icons">local_dining</i>
        </Link>
        {/* <ul className="right hide-on-med-and-down"> */}
        <ul className="right">
          <li>
            <a href="/">
              <i className="material-icons">search</i>
            </a>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          {/* Display this when signed in */}
          {/* <li>
            <a href="badges.html">
              <i className="material-icons">person</i>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Search;
