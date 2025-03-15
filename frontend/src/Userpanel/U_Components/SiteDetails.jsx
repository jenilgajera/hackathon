export const SiteDetails = () => {
  return (
    <div>
      <form>
        {/* 1. Building/Project/Scheme Information Section */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Building/Project/Scheme Information
            </h5>
          </div>

          {/* Section Content */}
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

              {/* Select Area of the Project */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="areaOfProject" className="form-label">
                    Select Area of the Project*
                  </label>
                  <select
                    className="form-select"
                    id="areaOfProject"
                    required
                  >
                    <option value="">Select Area</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="public">Public</option>
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

              {/* Area/Colony/Street/Sector/Society */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="area" className="form-label">
                    Area/Colony/Street/Sector/Society*
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

              {/* Taluka/City/Village */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="taluka" className="form-label">
                    Taluka/City/Village*
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

        {/* 2. Geographical Coordinates Section */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Geographical Coordinates
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Latitude */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="latitude" className="form-label">
                    Latitude* (e.g., 23.226877)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="latitude"
                    required
                  />
                </div>
              </div>

              {/* Longitude */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="longitude" className="form-label">
                    Longitude* (e.g., 72.65973)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="longitude"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Additional Site Information Section */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Additional Site Information
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* TP Number */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="tpNumber" className="form-label">
                    TP Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tpNumber"
                  />
                </div>
              </div>

              {/* FP Number */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fpNumber" className="form-label">
                    FP Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fpNumber"
                  />
                </div>
              </div>

              {/* Survey Number */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="surveyNumber" className="form-label">
                    Survey Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="surveyNumber"
                  />
                </div>
              </div>

              {/* Sub Plot Number */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="subPlotNumber" className="form-label">
                    Sub Plot Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subPlotNumber"
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