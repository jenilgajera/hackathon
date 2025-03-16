import React from "react";
import "../Assets/css/L_navbar.css";
import logo from "../Assets/image/logo.png";
import { Link } from "react-router-dom";

const L_navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container-fluid">
        {/* Left Side: Logo and Title */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top logo"
          />
          <span className="ms-2 title">Hackathon</span>
        </a>

        {/* Right Side: Navigation Links */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
<<<<<<< Updated upstream
              <Link className="nav-link active" aria-current="page" to={"/"}>
=======
              <Link className="nav-link active" ria-current="page" to={"/Home"}>
>>>>>>> Stashed changes
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Apply"}>
                Apply
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Track"}>
                Track
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< Updated upstream
              <Link className="btn btn-custom me-2" to={"/Login"}>
=======
              <Link className="nav-link" to={"/Login"}>
>>>>>>> Stashed changes
                Login
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< Updated upstream
              <Link className="btn btn-custom" to={"/Register"}>
=======
              <Link className="nav-link" to={"/Register"}>
>>>>>>> Stashed changes
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default L_navbar;
