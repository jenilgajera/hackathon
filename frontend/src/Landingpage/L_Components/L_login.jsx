import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Assets/css/L_register.css";

const L_login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save token to localStorage
      localStorage.setItem("token", response.data.token);
      
      // Save user data if needed
      localStorage.setItem("user", JSON.stringify({
        _id: response.data._id,
        name: response.data.name,
        email: response.data.email
      }));

      // Redirect to dashboard or home page
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-6">
            <div className="register-form p-4 rounded">
              <h2 className="text-center text-white mb-4">Login</h2>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
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

export default L_login;