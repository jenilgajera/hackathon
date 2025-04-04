import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/image/logo.png";
import "../Assets/css/Userstyle.css";
import { Navigate } from "react-router-dom";
const UserNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg p-3 sticky-top"
      style={{
        background: "linear-gradient(to right, #582105, #a44a1e)",
      }}
    >
      <div className="container-fluid">
        {/* Logo and Title */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/user">
          <img
            src={logo}
            alt="Logo"
            className="logo me-2"
            style={{
              height: "40px",
              width: "40px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <span className="title text-white fs-4 fw-bold">
            Fire Safety Certificate
          </span>
        </NavLink>

        {/* Navbar Toggler for Mobile */}
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

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Link */}
            <li className="nav-item">
              <NavLink
                to="/user"
                end
                className={({ isActive }) =>
                  `nav-link text-white fw-medium mx-2 d-flex align-items-center hover-effect ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <i className="bi bi-house-door me-2 icon"></i>
                Home
              </NavLink>
            </li>

            {/* Contact Us Link */}
            <li className="nav-item">
              <NavLink
                to="/user/contactus"
                className={({ isActive }) =>
                  `nav-link text-white fw-medium mx-2 d-flex align-items-center hover-effect ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <i className="bi bi-telephone me-2 icon"></i>
                Contact Us
              </NavLink>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-medium mx-2 d-flex align-items-center hover-effect"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle me-2 icon"></i>
                Welcome, User
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <NavLink
                    className="dropdown-item hover-effect"
                    to="/user/profile"
                  >
                    <i className="bi bi-person-circle me-2"></i>Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item hover-effect"
                    to="/user/change-password"
                  >
                    <i className="bi bi-key me-2"></i>Change Password
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                    className="dropdown-item hover-effect"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
