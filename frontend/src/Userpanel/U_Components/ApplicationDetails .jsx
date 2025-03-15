import React from "react";
import "../Assets/css/Userstyle.css"; // Import custom CSS for styling

export const ApplicationDetails = () => {
  return (
    <div>
      <form>
        {/* Personal Information Section */}
        <div className="section-container position-relative mb-4">
          {/* Personal Information Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Personal Information
            </h5>
          </div>

          {/* Personal Information Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Name */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number*
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    required
                  />
                </div>
              </div>

              {/* Email ID */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email ID*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Information Section */}
        <div className="section-container position-relative mb-4">
          {/* Location Information Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Location Information
            </h5>
          </div>

          {/* Location Information Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* District */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="district" className="form-label">
                    District*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="district"
                    required
                  />
                </div>
              </div>

              {/* Plot/House No., Building/Company/Apartment Name/No. */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="plot" className="form-label">
                    Plot/ House No., Building/ Company/ Apartment Name/ No.*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="plot"
                    required
                  />
                </div>
              </div>

              {/* Area/Colony/Street/Sector/Ward/Village */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="area" className="form-label">
                    Area/ Colony/ Street/ Sector/ Ward/ Village*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="area"
                    required
                  />
                </div>
              </div>

              {/* Landmark */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="landmark" className="form-label">
                    Landmark*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="landmark"
                    required
                  />
                </div>
              </div>

              {/* Taluka */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="taluka" className="form-label">
                    Taluka*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taluka"
                    required
                  />
                </div>
              </div>

              {/* Pin Code */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="pincode" className="form-label">
                    Pin Code*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architect/Engineer Details Section */}
        <div className="section-container position-relative mb-4">
          {/* Architect/Engineer Details Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Architect/Engineer Details
            </h5>
          </div>

          {/* Architect/Engineer Details Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Name (Architect on Record - AoR / Engineer on Record - EoR) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="architectName" className="form-label">
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

              {/* Registration No. */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="registrationNo" className="form-label">
                    Registration No.*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="registrationNo"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary btn-lg">
            Draft & Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationDetails;