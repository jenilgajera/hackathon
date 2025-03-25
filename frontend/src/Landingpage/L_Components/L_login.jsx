import React from "react";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

const L_login = () => {
  // Fire NOC background image
  const fireNocBg = "https://media.istockphoto.com/id/2149685588/photo/firefighters-extinguishing-blaze-in-industrial-area.jpg";

  return (
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100 p-3"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${fireNocBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="card p-3 p-md-4 mx-2" style={{
        width: "100%",
        maxWidth: "450px",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(8px)",
        border: "none",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)"
      }}>
        <div className="text-center mb-3 mb-md-4">
          <h2 className="h4 h3-md mb-1 fw-semibold">Sign in to your account</h2>
          <p className="text-muted mb-2">
            Or <Link to="/register" className="text-primary text-decoration-none fw-medium">create a new account</Link>
          </p>
        </div>

        <form>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control py-2"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control py-2"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-3 mb-md-4">
            <div className="form-check mb-2 mb-sm-0">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-primary text-decoration-none">
              Forgot your password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button 
            type="submit" 
            className="btn w-100 py-2 fw-medium"
            style={{ 
              backgroundColor: "#ff0000", 
              color: "white",
              border: "none",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.opacity = "0.9"}
            onMouseOut={(e) => e.target.style.opacity = "1"}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default L_login;