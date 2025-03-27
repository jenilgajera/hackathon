export const RenewFireSafetyMeasures = () => {
  return (
    <div>
      <form>
        {/* Section 3: Fire Safety Equipment Details */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 3: Fire Safety Equipment Details
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Are there Fire Extinguishers available? */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Are there Fire Extinguishers available?*
                  </label>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireExtinguishers"
                        id="fireExtinguishersYes"
                        value="Yes"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="fireExtinguishersYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireExtinguishers"
                        id="fireExtinguishersNo"
                        value="No"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="fireExtinguishersNo"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Maintenance Date of Fire Extinguishers */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="lastMaintenanceDate" className="form-label">
                    Last Maintenance Date of Fire Extinguishers*
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="lastMaintenanceDate"
                    required
                  />
                </div>
              </div>

              {/* Are there Smoke Detectors installed? */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Are there Smoke Detectors installed?*
                  </label>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="smokeDetectors"
                        id="smokeDetectorsYes"
                        value="Yes"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="smokeDetectorsYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="smokeDetectors"
                        id="smokeDetectorsNo"
                        value="No"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="smokeDetectorsNo"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Is there a Fire Alarm System? */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Is there a Fire Alarm System?*
                  </label>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireAlarm"
                        id="fireAlarmYes"
                        value="Yes"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="fireAlarmYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireAlarm"
                        id="fireAlarmNo"
                        value="No"
                      />
                      <label className="form-check-label" htmlFor="fireAlarmNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Are Fire Drills conducted regularly? */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Are Fire Drills conducted regularly?*
                  </label>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireDrills"
                        id="fireDrillsYes"
                        value="Yes"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="fireDrillsYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireDrills"
                        id="fireDrillsNo"
                        value="No"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="fireDrillsNo"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Fire Safety Awareness */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 4: Fire Safety Awareness
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Have you received fire safety training? */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Have you received fire safety training?*
                  </label>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireSafetyTraining"
                        id="fireSafetyTrainingYes"
                        value="Yes"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="fireSafetyTrainingYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireSafetyTraining"
                        id="fireSafetyTrainingNo"
                        value="No"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="fireSafetyTrainingNo"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Do you know the location of the nearest fire exit? */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Do you know the location of the nearest fire exit?*
                  </label>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireExit"
                        id="fireExitYes"
                        value="Yes"
                        required
                      />
                      <label className="form-check-label" htmlFor="fireExitYes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fireExit"
                        id="fireExitNo"
                        value="No"
                      />
                      <label className="form-check-label" htmlFor="fireExitNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Do you know how to operate a fire extinguisher? */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Do you know how to operate a fire extinguisher?*
                  </label>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="operateExtinguisher"
                        id="operateExtinguisherYes"
                        value="Yes"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="operateExtinguisherYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="operateExtinguisher"
                        id="operateExtinguisherNo"
                        value="No"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="operateExtinguisherNo"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Do you have an evacuation plan at home/work? */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Do you have an evacuation plan at home/work?*
                  </label>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="evacuationPlan"
                        id="evacuationPlanYes"
                        value="Yes"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="evacuationPlanYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="evacuationPlan"
                        id="evacuationPlanNo"
                        value="No"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="evacuationPlanNo"
                      >
                        No
                      </label>
                    </div>
                  </div>
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
