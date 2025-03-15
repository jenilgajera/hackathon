export const FireSafetyMeasures = () => {
  return (
    <div>
      <form>
        {/* 1. Personal Information Section */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Personal Information
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Name of Pandal Owner/Erector */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="ownerName" className="form-label">
                    Name of Pandal Owner/Erector*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ownerName"
                    required
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number*
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileNumber"
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

              {/* Alternate Mobile Number */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="alternateMobile" className="form-label">
                    Alternate Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="alternateMobile"
                  />
                </div>
              </div>

              {/* Alternate Email ID */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="alternateEmail" className="form-label">
                    Alternate Email ID
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="alternateEmail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Location Information Section */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Location Information
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* District (Dropdown Selection) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="district" className="form-label">
                    District*
                  </label>
                  <select className="form-select" id="district" required>
                    <option value="">Select District</option>
                    <option value="district1">District 1</option>
                    <option value="district2">District 2</option>
                    <option value="district3">District 3</option>
                  </select>
                </div>
              </div>

              {/* Plot/House No., Building/Company/Apartment Name/No. */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="plotNo" className="form-label">
                    Plot/House No., Building/Company/Apartment Name/No.*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="plotNo"
                    required
                  />
                </div>
              </div>

              {/* Area/Colony/Street/Sector/Ward/Village */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="area" className="form-label">
                    Area/Colony/Street/Sector/Ward/Village*
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