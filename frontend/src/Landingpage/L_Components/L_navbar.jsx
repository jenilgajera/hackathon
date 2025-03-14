import React from "react";
import "../Assets/css/L_navbar.css";
import logo from "../Assets/image/logo.png";

const L_navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        {/* Left Side: Logo and Title */}
        <a className="navbar-brand" href="#">
          <img
            src={logo} // Replace with your logo URL
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top logo"
          />
          <span className="ms-2 title">Hackthon</span>{" "}
          {/* Replace with your project title */}
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Apply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Track
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default L_navbar;