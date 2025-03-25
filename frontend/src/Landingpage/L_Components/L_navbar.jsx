import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/image/logo.png";

const L_navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#000000",
  };

  const logoStyle = {
    marginRight: "10px",
    width: "30px",
    height: "30px",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  const linksStyle = {
    display: "flex",
    gap: "2rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
    fontWeight: "500",
    transition: "color 0.3s",
    padding: "0.5rem 0",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#ff0000",
    borderBottom: "2px solid #ff0000",
  };

  const actionsStyle = {
    display: "flex",
    gap: "1rem",
  };

  const loginBtnStyle = {
    padding: "0.5rem 1rem",
    textDecoration: "none",
    color: "#000000",
    border: "1px solid #000000",
    borderRadius: "4px",
    transition: "all 0.3s",
  };

  const registerBtnStyle = {
    padding: "0.5rem 1rem",
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#ff0000",
    borderRadius: "4px",
    transition: "all 0.3s",
  };

  const isActive = (path) => {
    return activeLink === path;
  };

  return (
    <div style={navStyle}>
      {/* Left Side: Logo and Title */}
      <Link to="/" style={brandStyle} onClick={() => setActiveLink("/")}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <span style={titleStyle}>Fire NOC Portal</span>
      </Link>

      {/* Center: Navigation Links */}
      <div style={linksStyle}>
        <Link 
          to="/" 
          style={isActive("/") ? activeLinkStyle : linkStyle}
          onClick={() => setActiveLink("/")}
        >
          Home
        </Link>
        <Link 
          to="/Apply" 
          style={isActive("/Apply") ? activeLinkStyle : linkStyle}
          onClick={() => setActiveLink("/Apply")}
        >
          Apply
        </Link>
        <Link 
          to="/Track" 
          style={isActive("/Track") ? activeLinkStyle : linkStyle}
          onClick={() => setActiveLink("/Track")}
        >
          Track Status
        </Link>
        <Link 
          to="/Guidelines" 
          style={isActive("/Guidelines") ? activeLinkStyle : linkStyle}
          onClick={() => setActiveLink("/Guidelines")}
        >
          Guidelines
        </Link>
        <Link 
          to="/Contact" 
          style={isActive("/Contact") ? activeLinkStyle : linkStyle}
          onClick={() => setActiveLink("/Contact")}
        >
          Contact
        </Link>
      </div>

      {/* Right Side: Login/Register Buttons */}
      <div style={actionsStyle}>
        <Link to="/Login" style={loginBtnStyle}>Login</Link>
        <Link to="/Register" style={registerBtnStyle}>Register</Link>
      </div>
    </div>
  );
};

export default L_navbar;