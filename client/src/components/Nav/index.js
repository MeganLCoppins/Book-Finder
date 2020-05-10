import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navBarBg navbar navbar-expand-lg mb-2">
      <ul className="nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link googleBooks" >
            Google Books
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link" id="navLink">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/saved"} className="nav-link" id="navLink">
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;