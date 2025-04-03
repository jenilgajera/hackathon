import React, { useState, useEffect } from "react";
import { applicationApi } from "../../Services/apiService"
import "../Assets/css/Userstyle.css";

export const ApplicationDetails = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    mobile_number: "",
    email: "",

    // Location Information
    district: "",
    plot_details: "",
    area: "",
    landmark: "",
    village: "",
    taluka: "",
    pin_code: "",

    // Architect/Engineer Details
    architect_name: "",
    registration_no: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load draft data on component mount
  useEffect(() => {
    const loadDraftData = async () => {
      try {
        const response = await applicationApi.getDraftStatus();
        if (response.data) {
          // Merge data from different sections
          setFormData({
            ...formData,
            ...response.data.application,
            ...response.data.location,
            ...response.data.architect,
          });
        }
      } catch (error) {
        console.error("Error loading draft data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDraftData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save personal information
      const personalResponse = await applicationApi.savePersonalInfo({
        name: formData.name,
        mobile_number: formData.mobile_number,
        email: formData.email,
      });

      // Save location information
      const locationResponse = await applicationApi.saveLocation({
        district: formData.district,
        plot_details: formData.plot_details,
        area: formData.area,
        landmark: formData.landmark,
        village: formData.village,
        taluka: formData.taluka,
        pin_code: formData.pin_code,
      });

      // Save architect information
      const architectResponse = await applicationApi.saveArchitect({
        name: formData.architect_name,
        registration_no: formData.registration_no,
      });

      // Get the updated application status
      const draftStatus = await applicationApi.getDraftStatus();

      console.log(
        "Draft saved with status:",
        draftStatus.data.application.status
      );
      alert("Draft saved successfully!");
    } catch (error) {
      console.error(
        "Error saving draft:",
        error.response?.data || error.message
      );
      alert(
        `Failed to save draft: ${
          error.response?.data?.message || error.message
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div>Loading application data...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="section-container position-relative mb-4">
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Personal Information
            </h5>
          </div>

          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="mobile_number" className="form-label">
                    Mobile Number*
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile_number"
                    name="mobile_number"
                    value={formData.mobile_number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email ID*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Information Section */}
        <div className="section-container position-relative mb-4">
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Location Information
            </h5>
          </div>

          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="district" className="form-label">
                    District*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="plot_details" className="form-label">
                    Plot/ House No., Building/ Company/ Apartment Name/ No.*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="plot_details"
                    name="plot_details"
                    value={formData.plot_details}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="area" className="form-label">
                    Area/ Colony/ Street/ Sector/ Ward/ Village*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="landmark" className="form-label">
                    Landmark*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="landmark"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="village" className="form-label">
                    Village*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="village"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="taluka" className="form-label">
                    Taluka*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taluka"
                    name="taluka"
                    value={formData.taluka}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="pin_code" className="form-label">
                    Pin Code*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pin_code"
                    name="pin_code"
                    value={formData.pin_code}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architect/Engineer Details Section */}
        <div className="section-container position-relative mb-4">
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Architect/Engineer Details
            </h5>
          </div>

          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="architect_name" className="form-label">
                    Name (Architect on Record - AoR / Engineer on Record - EoR)*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="architect_name"
                    name="architect_name"
                    value={formData.name  }
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="registration_no" className="form-label">
                    Registration No.*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="registration_no"
                    name="registration_no"
                    value={formData.registration_no}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg rounded-pill px-4"
            onClick={() => window.history.back()}
          >
            <i className="bi bi-arrow-left me-2"></i>Back
          </button>
          <button
            type="submit"
            className="btn btn-primary btn-lg rounded-pill px-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Saving...
              </>
            ) : (
              "Draft & Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationDetails;