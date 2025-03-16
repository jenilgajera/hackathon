import React from "react";
import "../Assets/css/L_register.css"; // Import custom CSS for styling

const L_register = () => {
  return (
    <div className="register-page">
      <div className="container">
        <div className="row justify-content-center">
<<<<<<< Updated upstream
          <div className="col-md-12 col-lg-10">
            <div className="register-form p-4 rounded">
              <h2 className="text-center text-white mb-4">Registration Form</h2>
=======
          <div className="col-md-10">
            <div className="register-form p-4 rounded">
              <h2 className="text-center mb-4">Registration Form</h2>
>>>>>>> Stashed changes
              <form>
                {/* First Row: Name, Mobile, Email */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
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

                {/* Second Row: Password, Confirm Password, Gender */}
                <div className="row mb-3">
                  <div className="col-md-4">
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
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Gender <span className="text-danger">*</span>
                      </label>
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="male"
                            name="gender"
                            value="male"
                            required
                          />
                          <label htmlFor="male" className="form-check-label">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="female"
                            name="gender"
                            value="female"
                            required
                          />
                          <label htmlFor="female" className="form-check-label">
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="other"
                            name="gender"
                            value="other"
                            required
                          />
                          <label htmlFor="other" className="form-check-label">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Row: Identity Proof, Upload Document, Captcha */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="identityProof" className="form-label">
                        Identity Proof <span className="text-danger">*</span>
                      </label>
                      <select className="form-select" id="identityProof" required>
                        <option value="">Please Select</option>
                        <option value="aadhar">Aadhar Card</option>
                        <option value="pan">PAN Card</option>
                        <option value="passport">Passport</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="document" className="form-label">
                        Upload Document <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="document"
                        accept=".pdf"
                        required
                      />
                      <small className="text-muted">
                        Note: Allowed Extension: PDF & Max size: 25 MB
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="captcha" className="form-label">
                        Enter Captcha <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="captcha"
                        placeholder="Enter captcha"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Register
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

export default L_register;