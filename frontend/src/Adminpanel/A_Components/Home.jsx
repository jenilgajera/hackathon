import { useEffect, useState } from "react";

const Home = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);
  const [updateStatus, setUpdateStatus] = useState({ loading: false, error: null, success: null });

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/getAllApplicationsWithDetails",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch applications");
      const data = await response.json();
      setApplications(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateApplicationStatus = async (id, status) => {
    setUpdateStatus({ loading: true, error: null, success: null });
    try {
      const response = await fetch(
        `http://localhost:5000/api/applications/${id}/status`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ status }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update status");
      }

      const result = await response.json();
      
      // Update local state
      setApplications(apps => 
        apps.map(app => 
          app.application._id === id 
            ? { ...app, application: { ...app.application, status } } 
            : app
        )
      );
      
      // Update selected app if modal is open
      if (selectedApp && selectedApp.application._id === id) {
        setSelectedApp({
          ...selectedApp,
          application: { ...selectedApp.application, status }
        });
      }

      setUpdateStatus({
        loading: false,
        error: null,
        success: `Status successfully changed to ${status}`
      });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setUpdateStatus(prev => ({ ...prev, success: null }));
      }, 3000);

    } catch (error) {
      console.error("Error updating application status:", error);
      setUpdateStatus({
        loading: false,
        error: error.message || "Failed to update status",
        success: null
      });
    }
  };

  const filteredApplications = applications.filter(
    (app) =>
      (filterStatus === "All" || app.application?.status === filterStatus) &&
      (app.application?.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        app.application?.email
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        app.application?.mobile_number?.includes(searchTerm) ||
        app.location?.district
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()))
  );

  const openModal = (application) => {
    setSelectedApp(application);
    // Reset update status when opening modal
    setUpdateStatus({ loading: false, error: null, success: null });
    // Show the modal using vanilla JS since we're not using react-bootstrap
    const modal = new window.bootstrap.Modal(
      document.getElementById("applicationModal")
    );
    modal.show();
  };

  if (isLoading) {
    return (
      <main className="content px-3 py-4 bg-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="content px-3 py-4 bg-light">
      <div className="container-fluid">
        {/* Header Section */}
        <div className="mb-4">
          <h3 className="fw-bold fs-4 mb-2">Applications Dashboard</h3>
          <p className="text-muted">
            View and manage all building permission applications
          </p>
        </div>

        {/* Applications Table */}
        <div className="card shadow-sm border-0">
          <div className="card-header bg-white py-3 d-flex justify-content-between">
            <h5 className="mb-0 fw-bold">Applications List</h5>
            <div className="d-flex gap-2">
              <select
                className="form-select form-select-sm w-auto"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="draft">Draft</option>
                <option value="submitted">Submitted</option>
                <option value="underreview">Under Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
              <input
                type="text"
                className="form-control form-control-sm w-auto"
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>SR NO</th>
                    <th>Application ID</th>
                    <th>Applicant Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>District</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.length > 0 ? (
                    filteredApplications.map((app, index) => (
                      <tr key={app.application._id}>
                        <td>{index + 1}</td>
                        <td>{app.application._id.substring(18, 24)}</td>
                        <td>{app.application.name}</td>
                        <td>{app.application.mobile_number}</td>
                        <td>{app.application.email}</td>
                        <td>{app.location?.district || "N/A"}</td>
                        <td>
                          <span
                            className={`badge ${
                              app.application.status === "approved"
                                ? "bg-success"
                                : app.application.status === "rejected"
                                ? "bg-danger"
                                : app.application.status === "submitted"
                                ? "bg-primary"
                                : app.application.status === "underreview"
                                ? "bg-warning"
                                : "bg-secondary"
                            }`}
                          >
                            {app.application.status}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => openModal(app)}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center py-3">
                        No applications found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Application Details Modal */}
        <div
          className="modal fade"
          id="applicationModal"
          tabIndex="-1"
          aria-labelledby="applicationModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="applicationModalLabel">
                  Application Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {selectedApp && (
                  <div>
                    {/* Status Update Messages */}
                    {updateStatus.error && (
                      <div className="alert alert-danger mb-3" role="alert">
                        {updateStatus.error}
                      </div>
                    )}
                    {updateStatus.success && (
                      <div className="alert alert-success mb-3" role="alert">
                        {updateStatus.success}
                      </div>
                    )}
                    
                    {/* Status Update Buttons */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Application Management</h5>
                        <div className="d-flex gap-2">
                          <button 
                            className="btn btn-success"
                            onClick={() => updateApplicationStatus(selectedApp.application._id, "approved")}
                            disabled={updateStatus.loading || selectedApp.application.status === "approved"}
                          >
                            {updateStatus.loading && selectedApp.application.status !== "approved" ? (
                              <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                            ) : null}
                            Approve Application
                          </button>
                          <button 
                            className="btn btn-danger"
                            onClick={() => updateApplicationStatus(selectedApp.application._id, "rejected")}
                            disabled={updateStatus.loading || selectedApp.application.status === "rejected"}
                          >
                            {updateStatus.loading && selectedApp.application.status !== "rejected" ? (
                              <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                            ) : null}
                            Reject Application
                          </button>
                          <button 
                            className="btn btn-warning"
                            onClick={() => updateApplicationStatus(selectedApp.application._id, "underreview")}
                            disabled={updateStatus.loading || selectedApp.application.status === "underreview"}
                          >
                            {updateStatus.loading && selectedApp.application.status !== "underreview" ? (
                              <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                            ) : null}
                            Mark Under Review
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Basic Information */}
                    <div className="mb-4">
                      <h5>Basic Information</h5>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="card p-3 mb-3">
                            <h6>Application Information</h6>
                            <p>
                              <strong>ID:</strong> {selectedApp.application._id}
                            </p>
                            <p>
                              <strong>Status:</strong>{" "}
                              <span
                                className={`badge ms-2 ${
                                  selectedApp.application.status === "approved"
                                    ? "bg-success"
                                    : selectedApp.application.status ===
                                      "rejected"
                                    ? "bg-danger"
                                    : selectedApp.application.status ===
                                      "submitted"
                                    ? "bg-primary"
                                    : selectedApp.application.status ===
                                      "underreview"
                                    ? "bg-warning"
                                    : "bg-secondary"
                                }`}
                              >
                                {selectedApp.application.status}
                              </span>
                            </p>
                            <p>
                              <strong>Created:</strong>{" "}
                              {new Date(
                                selectedApp.application.createdAt
                              ).toLocaleString()}
                            </p>
                            {selectedApp.application.submittedAt && (
                              <p>
                                <strong>Submitted:</strong>{" "}
                                {new Date(
                                  selectedApp.application.submittedAt
                                ).toLocaleString()}
                              </p>
                            )}
                            {selectedApp.application.processedAt && (
                              <p>
                                <strong>Processed:</strong>{" "}
                                {new Date(
                                  selectedApp.application.processedAt
                                ).toLocaleString()}
                              </p>
                            )}
                            <p>
                              <strong>Current Step:</strong>{" "}
                              {selectedApp.application.currentStep}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card p-3 mb-3">
                            <h6>Personal Information</h6>
                            <p>
                              <strong>Name:</strong>{" "}
                              {selectedApp.application.name}
                            </p>
                            <p>
                              <strong>Email:</strong>{" "}
                              {selectedApp.application.email}
                            </p>
                            <p>
                              <strong>Mobile:</strong>{" "}
                              {selectedApp.application.mobile_number}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location Information */}
                    <div className="mb-4">
                      <h5>Location Information</h5>
                      <div className="card p-3">
                        <div className="row">
                          <div className="col-md-6">
                            <p>
                              <strong>District:</strong>{" "}
                              {selectedApp.location?.district}
                            </p>
                            <p>
                              <strong>Plot Details:</strong>{" "}
                              {selectedApp.location?.plot_details}
                            </p>
                            <p>
                              <strong>Area:</strong>{" "}
                              {selectedApp.location?.area}
                            </p>
                            <p>
                              <strong>Landmark:</strong>{" "}
                              {selectedApp.location?.landmark}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Village:</strong>{" "}
                              {selectedApp.location?.village}
                            </p>
                            <p>
                              <strong>Taluka:</strong>{" "}
                              {selectedApp.location?.taluka}
                            </p>
                            <p>
                              <strong>PIN Code:</strong>{" "}
                              {selectedApp.location?.pin_code}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="mb-4">
                      <h5>Project Details</h5>
                      <div className="card p-3">
                        <div className="row">
                          <div className="col-md-6">
                            <h6>Site Information</h6>
                            <p>
                              <strong>Project Name:</strong>{" "}
                              {selectedApp.site?.project_name}
                            </p>
                            <p>
                              <strong>Area Type:</strong>{" "}
                              {selectedApp.site?.area_type}
                            </p>
                            <p>
                              <strong>Plot Details:</strong>{" "}
                              {selectedApp.site?.plot_details}
                            </p>
                            <p>
                              <strong>Area Details:</strong>{" "}
                              {selectedApp.site?.area_details}
                            </p>
                            <p>
                              <strong>Landmark:</strong>{" "}
                              {selectedApp.site?.landmark}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <h6>Project Specifications</h6>
                            <p>
                              <strong>Occupancy Type:</strong>{" "}
                              {selectedApp.project?.occupancy_type}
                            </p>
                            <p>
                              <strong>Site Area:</strong>{" "}
                              {selectedApp.project?.site_area}
                            </p>
                            <p>
                              <strong>Road Width:</strong>{" "}
                              {selectedApp.project?.road_width}
                            </p>
                            <p>
                              <strong>Building Blocks:</strong>{" "}
                              {selectedApp.project?.building_blocks}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Architect Details */}
                    <div className="mb-4">
                      <h5>Architect Details</h5>
                      <div className="card p-3">
                        <div className="row">
                          <div className="col-md-6">
                            <p>
                              <strong>Name:</strong>{" "}
                              {selectedApp.architect?.name}
                            </p>
                            <p>
                              <strong>Registration No:</strong>{" "}
                              {selectedApp.architect?.registration_no}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fire Safety */}
                    <div className="mb-4">
                      <h5>Fire Safety Measures</h5>
                      <div className="card p-3">
                        <div className="row">
                          <div className="col-md-6">
                            <p>
                              <strong>Fire Extinguishers:</strong>{" "}
                              {selectedApp.fireSafety?.fire_extinguishers
                                ? "Yes"
                                : "No"}
                            </p>
                            <p>
                              <strong>Smoke Detectors:</strong>{" "}
                              {selectedApp.fireSafety?.smoke_detectors
                                ? "Yes"
                                : "No"}
                            </p>
                            <p>
                              <strong>Fire Alarm System:</strong>{" "}
                              {selectedApp.fireSafety?.fire_alarm_system
                                ? "Yes"
                                : "No"}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Fire Drills:</strong>{" "}
                              {selectedApp.fireSafety?.fire_drills
                                ? "Yes"
                                : "No"}
                            </p>
                            <p>
                              <strong>Training Received:</strong>{" "}
                              {selectedApp.fireSafety?.training_received
                                ? "Yes"
                                : "No"}
                            </p>
                            <p>
                              <strong>Evacuation Plan:</strong>{" "}
                              {selectedApp.fireSafety?.evacuation_plan
                                ? "Yes"
                                : "No"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Attachments */}
                    <div className="mb-4">
                      <h5>Attachments</h5>
                      <div className="card p-3">
                        <div className="row">
                          {selectedApp.attachments?.map((file) => (
                            <div className="col-md-4 mb-3" key={file._id}>
                              <div className="card h-100">
                                <div className="card-body">
                                  <h6 className="card-title">
                                    {file.document_type.replace(/_/g, " ")}
                                  </h6>
                                  <p className="card-text small">
                                    <strong>File:</strong> {file.original_name}
                                    <br />
                                    <strong>Type:</strong> {file.mime_type}
                                    <br />
                                    <strong>Size:</strong>{" "}
                                    {(file.size / 1024).toFixed(2)} KB
                                  </p>
                                  <a
                                    href={`http://localhost:5000/${file.file_path.replace(
                                      /\\/g,
                                      "/"
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-primary"
                                  >
                                    View File
                                  </a>
                                </div>
                              </div>  
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;