import React from "react";

const Search = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="left brand-logo">
          <i className="material-icons">local_dining</i>
        </a>
        {/* <ul className="right hide-on-med-and-down"> */}
        <ul className="right">
          <li>
            <a href="/">
              <i className="material-icons">search</i>
            </a>
          </li>
          <li>
            <a href="/">Sign in</a>
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
