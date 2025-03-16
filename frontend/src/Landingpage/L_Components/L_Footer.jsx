import React from "react";
<<<<<<< Updated upstream

const L_Footer = () => {
  return (
    <footer
      className="py-4"
      style={{
        background: "linear-gradient(to right, #582105, #a44a1e)",
        color: "white",
      }}
    >
      <div className="container text-center">
        <p className="mb-0">
          &copy; 2023 Fire Safety Certificate. All rights reserved.
        </p>
=======
import "../Assets/css/Footer.css"; // Import custom CSS for styling
import logo from "../Assets/image/logo.png"; // Import your logo

const L_Footer = () => {
  return (
    <footer className="footer  bg-dark text-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left Side: Logo, Copyright, and Text */}
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="me-3"
            />
            <div>
              <p className="mb-0 mt-4">
                &copy; 2023 Fire NOC Digital Platform. All rights reserved.
              </p>
              <p className="mb-0 small text-muted">
                Ensuring fire safety for a secure Gujarat.
              </p>
            </div>
          </div>

          {/* Right Side: Links */}
          <div className="d-flex">
            <a href="#" className="text-white text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-decoration-none">
              Terms of Service
            </a>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>
    </footer>
  );
};

<<<<<<< Updated upstream
export default L_Footer;
=======
export default L_Footer;
>>>>>>> Stashed changes
