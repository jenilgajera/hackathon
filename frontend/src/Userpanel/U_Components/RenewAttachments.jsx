export const RenewAttachments = () => {
  return (
    <div>
      <form>
        {/* Section 1: Personal Documents */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 1: Personal Documents
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Owner Photo */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="ownerPhoto" className="form-label">
                    Owner Photo*
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="ownerPhoto"
                    accept="image/*"
                    required
                  />
                </div>
              </div>

              {/* Aadhar Card */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="aadharCard" className="form-label">
                    Aadhar Card*
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="aadharCard"
                    required
                  />
                </div>
              </div>

              {/* PAN Card */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="panCard" className="form-label">
                    PAN Card*
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="panCard"
                    required
                  />
                </div>
              </div>

              {/* Self Assurance Video */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="selfAssuranceVideo" className="form-label">
                    Self Assurance Video*
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="selfAssuranceVideo"
                    accept="video/*"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Property Documents */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 2: Property Documents
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Property Card / Property Document */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="propertyDocument" className="form-label">
                    Property Card / Property Document*
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="propertyDocument"
                    required
                  />
                </div>
              </div>

              {/* Insurance Policy */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="insurancePolicy" className="form-label">
                    Insurance Policy*
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="insurancePolicy"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Building Plan Documents */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 3: Building Plan Documents
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Building Plan Approval Copy */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="buildingPlanApproval" className="form-label">
                    Building Plan Approval Copy*
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="buildingPlanApproval"
                    required
                  />
                </div>
              </div>

              {/* Architectural Building Plan */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="architecturalPlan" className="form-label">
                    Architectural Building Plan*
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="architecturalPlan"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Other Documents */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 4: Other Documents
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Electricity Bill Section Letter */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="electricityBill" className="form-label">
                    Electricity Bill Section Letter*
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="electricityBill"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save as Draft Button */}
        <div className="mb-3">
          <button type="button" className="btn btn-secondary">
            Save as Draft
          </button>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="firenocTermsCheckbox"
            required
          />
          <label className="form-check-label" htmlFor="firenocTermsCheckbox">
            I have read all the above terms and conditions and understand them
            fully. I declare that I am submitting only one application for
            Firenoc and I haven't received any other scholarship, stipend, or
            fellowship in this current session under any other central/state
            government scheme. Further, I state that all information furnished
            by me is correct to my knowledge. In case of any false information
            or suppression of necessary data, my application is liable to get
            cancelled at any stage of the process, and the entire amount of the
            scholarship/fellowship will be refunded by me or recovered from me.
            The decision of the Firenoc authorities shall be final and binding
            on me.
          </label>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-between">
          <div>
            <button type="button" className="btn btn-primary me-2">
              Verify Mobile Number
            </button>
            <button type="submit" className="btn btn-success">
              Confirm & Final Submit
            </button>
          </div>
          <button
            type="button"
            className="btn"
            style={{
              background: "linear-gradient(to right, #582105, #a44a1e)",
              color: "white",
            }}
          >
            Print Application
          </button>
        </div>

        {/* Note Section */}
        <div className="mb-3">
          <p className="text-danger">
            <strong>Note:</strong> Once you submit your application, you will
            not be able to make any changes. Please verify all details and
            documents before final submission.
          </p>
        </div>
      </form>
    </div>
  );
};
