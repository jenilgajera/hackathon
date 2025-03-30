import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Assets/css/L_register.css";

const L_register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile_number: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    identity_proof: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.mobile_number) newErrors.mobile_number = "Mobile number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.identity_proof) newErrors.identity_proof = "Identity proof is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const { confirmPassword, ...userData } = formData;
      
      const response = await axios.post("http://localhost:5000/api/auth/register", userData);
      
      if (response.data.success) {
        alert("Registration successful!");
        navigate("/login"); // Redirect to login page
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        alert(error.response.data.message || "Registration failed");
      } else if (error.request) {
        // The request was made but no response was received
        alert("No response from server. Please try again.");
      } else {
        // Something happened in setting up the request
        alert("Error: " + error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="register-form p-4 rounded">
              <h2 className="text-center text-white mb-4">Registration Form</h2>
              <form onSubmit={handleSubmit}>
                {/* First Row: Name, Mobile, Email */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="mobile_number" className="form-label">
                        Mobile Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className={`form-control ${errors.mobile_number ? "is-invalid" : ""}`}
                        id="mobile_number"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        required
                      />
                      {errors.mobile_number && <div className="invalid-feedback">{errors.mobile_number}</div>}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email ID <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                      />
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        required
                      />
                      {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
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
                            className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                            id="male"
                            name="gender"
                            value="Male"
                            checked={formData.gender === "Male"}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="male" className="form-check-label">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="radio"
                            className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                            id="female"
                            name="gender"
                            value="Female"
                            checked={formData.gender === "Female"}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="female" className="form-check-label">
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="radio"
                            className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                            id="other"
                            name="gender"
                            value="Other"
                            checked={formData.gender === "Other"}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="other" className="form-check-label">
                            Other
                          </label>
                        </div>
                        {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Row: Identity Proof */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="identity_proof" className="form-label">
                        Identity Proof <span className="text-danger">*</span>
                      </label>
                      <select
                        className={`form-select ${errors.identity_proof ? "is-invalid" : ""}`}
                        id="identity_proof"
                        name="identity_proof"
                        value={formData.identity_proof}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Please Select</option>
                        <option value="Aadhar Card">Aadhar Card</option>
                        <option value="PAN Card">PAN Card</option>
                        <option value="Passport">Passport</option>
                      </select>
                      {errors.identity_proof && <div className="invalid-feedback">{errors.identity_proof}</div>}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => navigate("/")}
                  >
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