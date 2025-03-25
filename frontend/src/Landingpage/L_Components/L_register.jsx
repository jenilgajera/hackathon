import React from "react";
import { Link } from "react-router-dom";
import { 
  EnvelopeFill,
  PersonFill,
  TelephoneFill,
  LockFill,
  PersonPlus // Changed from UserPlus to PersonPlus which is available in react-bootstrap-icons
} from "react-bootstrap-icons";

const L_register = () => {
  return (
    <div className="container py-3" style={{ maxWidth: '450px' }}>
      <div className="container d-flex flex-column align-items-center text-center py-4">
        {/* User Icon - Using PersonPlus instead of UserPlus */}
        <PersonPlus className="text-danger mb-3" size={50} />

        {/* Title */}
        <h2 className="fw-bold">Create your account</h2>

        {/* Sign-in Link */}
        <p className="text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-danger fw-semibold">
            Sign in
          </Link>
        </p>
      </div>


      {/* Form */}
      <form>
        {/* First Name */}
        <div className="mb-3">
          <label className="form-label small fw-semibold">First Name</label>
          <div className="input-group">
            <span className="input-group-text">
              <PersonFill size={16} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              required
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label className="form-label small fw-semibold">Last Name</label>
          <div className="input-group">
            <span className="input-group-text">
              <PersonFill size={16} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label small fw-semibold">Email</label>
          <div className="input-group">
            <span className="input-group-text">
              <EnvelopeFill size={16} />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label small fw-semibold">Phone Number</label>
          <div className="input-group">
            <span className="input-group-text">
              <TelephoneFill size={16} />
            </span>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label small fw-semibold">Password</label>
          <div className="input-group">
            <span className="input-group-text">
              <LockFill size={16} />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Create password"
              required
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label small fw-semibold">Confirm Password</label>
          <div className="input-group">
            <span className="input-group-text">
              <LockFill size={16} />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              required
            />
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="termsCheck"
            required
          />
          <label className="form-check-label small" htmlFor="termsCheck">
            I agree to the Terms and Conditions
          </label>
        </div>

        {/* Submit Button */}
        <button className="btn btn-danger w-100 py-2"> {/* Changed to btn-danger to match the red theme */}
          Create Account
        </button>
      </form>
    </div>
  );
};

export default L_register;