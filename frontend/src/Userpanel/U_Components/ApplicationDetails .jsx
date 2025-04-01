import React from "react";
import "../Assets/css/Userstyle.css"; // Import custom CSS for styling

export const ApplicationDetails = () => {
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
                    id="architectName"
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