import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const isDev = process.env.NODE_ENV === "development";
  const pathname = window.location.pathname;
  const prjPath = isDev ? "" : `/${pathname.split("/")[1]}`;

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={`${prjPath}/`} className="left brand-logo">
          <i className="material-icons">local_dining</i>
        </Link>
        {/* <ul className="right hide-on-med-and-down"> */}
        <ul className="right">
          <li>
            <a href={`${prjPath}/`}>
              <i className="material-icons">search</i>
            </a>
          </li>
          <li>
            <Link to={`${prjPath}/ratio`}>
              <i className="material-icons">blur_circular</i>
            </Link>
          </li>
          <li>
            <Link to={`${prjPath}/signin`}>Sign in</Link>
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

export default Header;
