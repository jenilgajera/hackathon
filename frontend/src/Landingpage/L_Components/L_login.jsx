import React from "react";
import "../Assets/css/L_register.css"; // Import the same CSS for styling

const L_login = () => {
  return (
    <div className="register-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-6"> {/* Adjusted width for login form */}
            <div className="register-form p-4 rounded">
              <h2 className="text-center text-white mb-4">Login</h2>
              <form>
                {/* Email */}
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email ID <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="password" className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <button type="button" className="btn btn-danger">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default L_login;