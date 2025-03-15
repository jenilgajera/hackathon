export const BuildingProjectDetails = () => {
  return (
    <div>
      <form>
        {/* Project Specifications Section */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Project Specifications
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Principal Occupancy/Use of the Building/Project/Scheme */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="principalOccupancy" className="form-label">
                    Principal Occupancy/Use of the Building/Project/Scheme*
                  </label>
                  <select
                    className="form-select"
                    id="principalOccupancy"
                    required
                  >
                    <option value="">Select Occupancy/Use</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="public">Public</option>
                  </select>
                </div>
              </div>

              {/* Site Area/Plot Area (in Sq.Mtrs) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="siteArea" className="form-label">
                    Site Area/Plot Area (in Sq.Mtrs)*
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="siteArea"
                    required
                  />
                </div>
              </div>

              {/* Approach Road Width (in Mtrs) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="approachRoadWidth" className="form-label">
                    Approach Road Width (in Mtrs)*
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="approachRoadWidth"
                    required
                  />
                </div>
              </div>

              {/* Number of Building Blocks (TAB Key generates blocks) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="buildingBlocks" className="form-label">
                    Number of Building Blocks (TAB Key generates blocks)*
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="buildingBlocks"
                    required
                  />
                </div>
              </div>

              {/* Width of the Main Entrance Gate (in Mtrs) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="entranceGateWidth" className="form-label">
                    Width of the Main Entrance Gate (in Mtrs)*
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="entranceGateWidth"
                    required
                  />
                </div>
              </div>

              {/* Height of the Main Entrance Gate/Arch (in Mtrs) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="entranceGateHeight" className="form-label">
                    Height of the Main Entrance Gate/Arch (in Mtrs)*
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="entranceGateHeight"
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