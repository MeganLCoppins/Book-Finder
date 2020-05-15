import React from "react";
import { Link } from "react-router-dom";
import Book from "../../assets/book.jpeg";
// import Book from "../../assets/book-icon.png";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  navBarBg">
      <img src={Book} alt="open book" id="book"></img>
      <Link to={"/"} className="nav-link googleBooks">
        Book Finder
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto nav">
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
      </div>
    </nav>
  );
}

export default Nav;