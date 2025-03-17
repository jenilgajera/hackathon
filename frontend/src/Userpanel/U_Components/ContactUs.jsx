import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/css/Userstyle.css"; // Ensure your custom CSS is imported

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issueType: "",
    contactMethod: "",
    message: "",
    attachment: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    navigate("/");
  };

  return (
    <div className="container p-5 contact-us-container">
      {/* Heading with Animation */}
      <h1
        className="text-center display-4 fw-bold mb-4 animate__animated animate__fadeInDown"
        style={{ color: "#582105" }}
      >
        Contact Us
      </h1>
      <p className="text-center text-muted mb-5 fs-5 animate__animated animate__fadeIn">
        Have questions or feedback? We'd love to hear from you!
      </p>

      {/* Contact Details and Form Section */}
      <div className="row justify-content-center animate__animated animate__fadeInUp">
        {/* Website Owner Details - Split into 4 cards */}
        <div className="col-md-12 mb-4">
          <div className="row">
            {/* Address Card */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center contact-details-card">
                <div className="card-body">
                  <i
                    className="bi bi-geo-alt-fill display-4 mb-3"
                    style={{ color: "#582105" }}
                  ></i>
                  <h5 className="card-title fw-bold">Address</h5>
                  <p className="card-text">123 Main Street, City, Country</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center contact-details-card">
                <div className="card-body">
                  <i
                    className="bi bi-envelope-fill display-4 mb-3"
                    style={{ color: "#582105" }}
                  ></i>
                  <h5 className="card-title fw-bold">Email</h5>
                  <p className="card-text">info@example.com</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center contact-details-card">
                <div className="card-body">
                  <i
                    className="bi bi-telephone-fill display-4 mb-3"
                    style={{ color: "#582105" }}
                  ></i>
                  <h5 className="card-title fw-bold">Phone</h5>
                  <p className="card-text">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center contact-details-card">
                <div className="card-body">
                  <i
                    className="bi bi-clock-fill display-4 mb-3"
                    style={{ color: "#582105" }}
                  ></i>
                  <h5 className="card-title fw-bold">Working Hours</h5>
                  <p className="card-text">Mon - Fri, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-12">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="row">
              {/* Name Field */}
              <div className="col-md-6 mb-4">
                <label htmlFor="name" className="form-label">
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="col-md-6 mb-4">
                <label htmlFor="email" className="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              {/* Phone Number Field */}
              <div className="col-md-6 mb-4">
                <label htmlFor="phone" className="form-label">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Issue Type Dropdown */}
              <div className="col-md-6 mb-4">
                <label htmlFor="issueType" className="form-label">
                  Issue Type*
                </label>
                <select
                  className="form-select"
                  id="issueType"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select an issue type</option>
                  <option value="Technical">Technical Issue</option>
                  <option value="Billing">Billing Issue</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Preferred Contact Method Radio Buttons */}
            <div className="mb-4">
              <label className="form-label">Preferred Contact Method*</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="emailContact"
                  name="contactMethod"
                  value="Email"
                  checked={formData.contactMethod === "Email"}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="emailContact" className="form-check-label">
                  Email
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="phoneContact"
                  name="contactMethod"
                  value="Phone"
                  checked={formData.contactMethod === "Phone"}
                  onChange={handleInputChange}
                />
                <label htmlFor="phoneContact" className="form-check-label">
                  Phone
                </label>
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Message*
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            {/* Attachment Field */}
            <div className="mb-4">
              <label htmlFor="attachment" className="form-label">
                Attachment (Optional)
              </label>
              <input
                type="file"
                className="form-control"
                id="attachment"
                name="attachment"
                onChange={handleFileChange}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg submit-button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
