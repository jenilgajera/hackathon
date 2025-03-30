import React, { useState, useEffect } from "react";
import { applicationApi } from "../../Services/apiService";
import "../Assets/css/Userstyle.css";

export const SiteDetails = () => {
  const [formData, setFormData] = useState({
    // Building/Project Information
    project_name: "",
    area_type: "",
    plot_details: "",
    area_details: "",
    landmark: "",
    taluka_city_village: "",
    pin_code: "",

    // Geographical Coordinates
    latitude: "",
    longitude: "",

    // Additional Site Information
    tp_number: "",
    fp_number: "",
    survey_number: "",
    sub_plot_number: ""
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Load draft data on component mount
  useEffect(() => {
      const loadDraftData = async () => {
        try {
          const response = await applicationApi.getDraftStatus();
          if (response.data) {
            // Merge data from different sections
            setFormData({
              ...formData,
              ...response.data.site,
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
    setError(null);
    setSuccess(false);

    try {
      // Convert latitude and longitude to numbers
      const submissionData = {
        ...formData,
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude)
      };

      await applicationApi.saveSite(submissionData);
      setSuccess(true);
    } catch (error) {
      console.error("Error saving site details:", error);
      setError(error.response?.data?.message || "Failed to save site details");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div>Loading site details...</div>;
  }

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Site details saved successfully!</div>}
      
      <form onSubmit={handleSubmit}>
        {/* 1. Building/Project Information Section */}
        <div className="section-container position-relative mb-4">
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Building/Project Information
            </h5>
          </div>

          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="project_name" className="form-label">
                    Project Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="project_name"
                    name="project_name"
                    value={formData.project_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="area_type" className="form-label">
                    Area Type*
                  </label>
                  <select
                    className="form-select"
                    id="area_type"
                    name="area_type"
                    value={formData.area_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Area Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="public">Public</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="plot_details" className="form-label">
                    Plot/House No., Building/Company/Apartment Name/No.*
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
                  <label htmlFor="area_details" className="form-label">
                    Area/Colony/Street/Sector/Society*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="area_details"
                    name="area_details"
                    value={formData.area_details}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="landmark" className="form-label">
                    Landmark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="landmark"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="taluka_city_village" className="form-label">
                    Taluka/City/Village*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taluka_city_village"
                    name="taluka_city_village"
                    value={formData.taluka_city_village}
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

        {/* 2. Geographical Coordinates Section */}
        <div className="section-container position-relative mb-4">
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Geographical Coordinates
            </h5>
          </div>

          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="latitude" className="form-label">
                    Latitude* (e.g., 23.226877)
                  </label>
                  <input
                    type="number"
                    step="any"
                    className="form-control"
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="longitude" className="form-label">
                    Longitude* (e.g., 72.65973)
                  </label>
                  <input
                    type="number"
                    step="any"
                    className="form-control"
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Additional Site Information Section */}
        <div className="section-container position-relative mb-4">
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Additional Site Information
            </h5>
          </div>

          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="tp_number" className="form-label">
                    TP Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tp_number"
                    name="tp_number"
                    value={formData.tp_number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fp_number" className="form-label">
                    FP Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fp_number"
                    name="fp_number"
                    value={formData.fp_number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="survey_number" className="form-label">
                    Survey Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="survey_number"
                    name="survey_number"
                    value={formData.survey_number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="sub_plot_number" className="form-label">
                    Sub Plot Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="sub_plot_number"
                    name="sub_plot_number"
                    value={formData.sub_plot_number}
                    onChange={handleChange}
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

export default SiteDetails;