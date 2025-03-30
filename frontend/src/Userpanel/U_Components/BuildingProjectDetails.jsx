import React, { useState, useEffect } from "react";
import { applicationApi } from "../../Services/apiService";
import "../Assets/css/Userstyle.css";

export const BuildingProjectDetails = () => {
  const [formData, setFormData] = useState({
    occupancy_type: "",
    site_area: "",
    road_width: "",
    building_blocks: "",
    entrance_width: "",
    entrance_height: ""
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
        if (response.data && response.data.project) {
          const projectData = response.data.project;
          
          setFormData({
            occupancy_type: projectData.occupancy_type || "",
            site_area: projectData.site_area?.toString() || "",
            road_width: projectData.road_width?.toString() || "",
            building_blocks: projectData.building_blocks?.toString() || "",
            entrance_width: projectData.entrance_width?.toString() || "",
            entrance_height: projectData.entrance_height?.toString() || ""
          });
        }
      } catch (error) {
        console.error("Error loading project data:", error);
        // setError("Failed to load project details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadDraftData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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
      // Prepare data for submission with correct field names
      const submissionData = {
        occupancy_type: formData.occupancy_type,
        site_area: formData.site_area ? parseFloat(formData.site_area) : null,
        road_width: formData.road_width ? parseFloat(formData.road_width) : null,
        building_blocks: formData.building_blocks ? parseInt(formData.building_blocks) : null,
        entrance_width: formData.entrance_width ? parseFloat(formData.entrance_width) : null,
        entrance_height: formData.entrance_height ? parseFloat(formData.entrance_height) : null
      };

      await applicationApi.saveProject(submissionData);
      setSuccess(true);
    } catch (error) {
      console.error("Error saving project details:", error);
      setError(error.response?.data?.message || "Failed to save project details");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="text-center my-5">Loading project details...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-danger mx-3 my-5">
        {error}
        <button 
          className="btn btn-link" 
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Project details saved successfully!</div>}
      
      <form onSubmit={handleSubmit}>
        {/* Project Specifications Section */}
        <div className="section-container position-relative mb-4">
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Project Specifications
            </h5>
          </div>

          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Principal Occupancy/Use of the Building/Project/Scheme */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="occupancy_type" className="form-label">
                    Principal Occupancy/Use of the Building/Project/Scheme*
                  </label>
                  <select
                    className="form-select"
                    id="occupancy_type"
                    name="occupancy_type"
                    value={formData.occupancy_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Occupancy/Use</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Public">Public</option>
                    <option value="Institutional">Institutional</option>
                    <option value="Assembly">Assembly</option>
                    <option value="Business">Business</option>
                    <option value="Mercantile">Mercantile</option>
                    <option value="Storage">Storage</option>
                    <option value="Hazardous">Hazardous</option>
                  </select>
                </div>
              </div>

              {/* Site Area/Plot Area (in Sq.Mtrs) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="site_area" className="form-label">
                    Site Area/Plot Area (in Sq.Mtrs)*
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    id="site_area"
                    name="site_area"
                    value={formData.site_area}
                    onChange={handleChange}
                    required
                    min="0"
                  />
                </div>
              </div>

              {/* Approach Road Width (in Mtrs) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="road_width" className="form-label">
                    Approach Road Width (in Mtrs)*
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    id="road_width"
                    name="road_width"
                    value={formData.road_width}
                    onChange={handleChange}
                    required
                    min="0"
                  />
                </div>
              </div>

              {/* Number of Building Blocks */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="building_blocks" className="form-label">
                    Number of Building Blocks*
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="building_blocks"
                    name="building_blocks"
                    value={formData.building_blocks}
                    onChange={handleChange}
                    required
                    min="1"
                  />
                </div>
              </div>

              {/* Width of the Main Entrance Gate (in Mtrs) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="entrance_width" className="form-label">
                    Width of the Main Entrance Gate (in Mtrs)*
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    id="entrance_width"
                    name="entrance_width"
                    value={formData.entrance_width}
                    onChange={handleChange}
                    required
                    min="0"
                  />
                </div>
              </div>

              {/* Height of the Main Entrance Gate/Arch (in Mtrs) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="entrance_height" className="form-label">
                    Height of the Main Entrance Gate/Arch (in Mtrs)*
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    id="entrance_height"
                    name="entrance_height"
                    value={formData.entrance_height}
                    onChange={handleChange}
                    required
                    min="0"
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

export default BuildingProjectDetails;