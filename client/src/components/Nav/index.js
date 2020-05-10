import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg mb-2">
      <ul className="nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link" >
            Google Books
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/saved"} className="nav-link">
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;