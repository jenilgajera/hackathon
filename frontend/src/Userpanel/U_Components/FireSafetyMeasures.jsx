import React, { useState, useEffect } from "react";
import { applicationApi } from "../../Services/apiService";
import "../Assets/css/Userstyle.css";

export const FireSafetyMeasures = () => {
  const [formData, setFormData] = useState({
    fire_extinguishers: false,
    extinguisher_date: "",
    smoke_detectors: false,
    fire_alarm_system: false,
    fire_drills: false,
    training_received: false,
    fire_exit_knowledge: false,
    extinguisher_usage: false,
    evacuation_plan: false
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
        if (response.data && response.data.fireSafety) {
          const safetyData = response.data.fireSafety;
          
          setFormData({
            fire_extinguishers: safetyData.fire_extinguishers || false,
            extinguisher_date: safetyData.extinguisher_date 
              ? new Date(safetyData.extinguisher_date).toISOString().split('T')[0] 
              : "",
            smoke_detectors: safetyData.smoke_detectors || false,
            fire_alarm_system: safetyData.fire_alarm_system || false,
            fire_drills: safetyData.fire_drills || false,
            training_received: safetyData.training_received || false,
            fire_exit_knowledge: safetyData.fire_exit_knowledge || false,
            extinguisher_usage: safetyData.extinguisher_usage || false,
            evacuation_plan: safetyData.evacuation_plan || false
          });
        }
      } catch (error) {
        console.error("Error loading fire safety data:", error);
        // setError("Failed to load fire safety details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadDraftData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value === 'true'
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const submissionData = {
        ...formData,
        extinguisher_date: formData.extinguisher_date 
          ? new Date(formData.extinguisher_date).toISOString() 
          : null
      };

      await applicationApi.saveFireSafety(submissionData);
      setSuccess(true);
    } catch (error) {
      console.error("Error saving fire safety details:", error);
      setError(error.response?.data?.message || "Failed to save fire safety details");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="text-left my-5">Loading fire safety details...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-danger mx-0 my-5 text-left">
        {error}
        <button 
          className="btn btn-link p-0 ml-2" 
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="text-left">
      {error && <div className="alert alert-danger text-left">{error}</div>}
      {success && <div className="alert alert-success text-left">Fire safety details saved successfully!</div>}
      
      <form onSubmit={handleSubmit} className="text-left">
        {/* Section 3: Fire Safety Equipment Details */}
        <div className="section-container position-relative mb-4 text-left">
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded text-left"
            style={{ top: "-15px", left: "0", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 3: Fire Safety Equipment Details
            </h5>
          </div>

          <div
            className="section-content bg-light p-4 border-2 rounded-3 text-left"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3 text-left">
              {/* Are there Fire Extinguishers available? */}
              <div className="col-md-6 text-left">
                <div className="mb-3 text-left">
                  <label className="form-label text-left d-block mb-2">
                    Are there Fire Extinguishers available?*
                  </label>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fire_extinguishers"
                        id="fireExtinguishersYes"
                        value="true"
                        checked={formData.fire_extinguishers === true}
                        onChange={handleRadioChange}
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
                        name="fire_extinguishers"
                        id="fireExtinguishersNo"
                        value="false"
                        checked={formData.fire_extinguishers === false}
                        onChange={handleRadioChange}
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
              <div className="col-md-6 text-left">
                <div className="mb-3 text-left">
                  <label htmlFor="extinguisher_date" className="form-label text-left">
                    Last Maintenance Date of Fire Extinguishers
                  </label>
                  <input
                    type="date"
                    className="form-control text-left"
                    id="extinguisher_date"
                    name="extinguisher_date"
                    value={formData.extinguisher_date}
                    onChange={handleChange}
                    disabled={!formData.fire_extinguishers}
                  />
                </div>
              </div>

              {/* Are there Smoke Detectors installed? */}
              <div className="col-md-6 text-left">
                <div className="mb-3 text-left">
                  <label className="form-label text-left d-block mb-2">
                    Are there Smoke Detectors installed?*
                  </label>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="smoke_detectors"
                        id="smokeDetectorsYes"
                        value="true"
                        checked={formData.smoke_detectors === true}
                        onChange={handleRadioChange}
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
                        name="smoke_detectors"
                        id="smokeDetectorsNo"
                        value="false"
                        checked={formData.smoke_detectors === false}
                        onChange={handleRadioChange}
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
              <div className="col-md-6 text-left">
                <div className="mb-3 text-left">
                  <label className="form-label text-left d-block mb-2">
                    Is there a Fire Alarm System?*
                  </label>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fire_alarm_system"
                        id="fireAlarmYes"
                        value="true"
                        checked={formData.fire_alarm_system === true}
                        onChange={handleRadioChange}
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
                        name="fire_alarm_system"
                        id="fireAlarmNo"
                        value="false"
                        checked={formData.fire_alarm_system === false}
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label" htmlFor="fireAlarmNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Are Fire Drills conducted regularly? */}
              <div className="col-md-6 text-left">
                <div className="mb-3 text-left">
                  <label className="form-label text-left d-block mb-2">
                    Are Fire Drills conducted regularly?*
                  </label>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fire_drills"
                        id="fireDrillsYes"
                        value="true"
                        checked={formData.fire_drills === true}
                        onChange={handleRadioChange}
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
                        name="fire_drills"
                        id="fireDrillsNo"
                        value="false"
                        checked={formData.fire_drills === false}
                        onChange={handleRadioChange}
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
        <div className="section-container position-relative mb-4 text-left">
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded text-left"
            style={{ top: "-15px", left: "0", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 4: Fire Safety Awareness
            </h5>
          </div>

          <div
            className="section-content bg-light p-4 border-2 rounded-3 text-left"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3 text-left">
              {/* Have you received fire safety training? */}
              <div className="col-md-6 text-left">
                <div className="mb-3 text-left">
                  <label className="form-label text-left d-block mb-2">
                    Have you received fire safety training?*
                  </label>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="training_received"
                        id="trainingReceivedYes"
                        value="true"
                        checked={formData.training_received === true}
                        onChange={handleRadioChange}
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="trainingReceivedYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="training_received"
                        id="trainingReceivedNo"
                        value="false"
                        checked={formData.training_received === false}
                        onChange={handleRadioChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="trainingReceivedNo"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Do you know the location of the nearest fire exit? */}
              <div className="col-md-6 text-left">
                <div className="mb-3 text-left">
                  <label className="form-label text-left d-block mb-2">
                    Do you know the location of the nearest fire exit?*
                  </label>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fire_exit_knowledge"
                        id="fireExitYes"
                        value="true"
                        checked={formData.fire_exit_knowledge === true}
                        onChange={handleRadioChange}
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
                        name="fire_exit_knowledge"
                        id="fireExitNo"
                        value="false"
                        checked={formData.fire_exit_knowledge === false}
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label" htmlFor="fireExitNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Do you know how to operate a fire extinguisher? */}
              <div className="col-md-6 text-left">
                <div className="mb-3 text-left">
                  <label className="form-label text-left d-block mb-2">
                    Do you know how to operate a fire extinguisher?*
                  </label>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="extinguisher_usage"
                        id="extinguisherUsageYes"
                        value="true"
                        checked={formData.extinguisher_usage === true}
                        onChange={handleRadioChange}
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="extinguisherUsageYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="extinguisher_usage"
                        id="extinguisherUsageNo"
                        value="false"
                        checked={formData.extinguisher_usage === false}
                        onChange={handleRadioChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="extinguisherUsageNo"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Do you have an evacuation plan at home/work? */}
              <div className="col-md-6 text-left">
                <div className="mb-3 text-left">
                  <label className="form-label text-left d-block mb-2">
                    Do you have an evacuation plan at home/work?*
                  </label>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="evacuation_plan"
                        id="evacuationPlanYes"
                        value="true"
                        checked={formData.evacuation_plan === true}
                        onChange={handleRadioChange}
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
                        name="evacuation_plan"
                        id="evacuationPlanNo"
                        value="false"
                        checked={formData.evacuation_plan === false}
                        onChange={handleRadioChange}
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

export default FireSafetyMeasures;