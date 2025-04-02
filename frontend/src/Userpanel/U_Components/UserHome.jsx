import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { applicationApi } from "../../Services/apiService"; // Import your API service

const UserHome = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await applicationApi.getApplications();
        console.log(response.data); // Debugging API response
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleFileNOC = () => navigate("file-noc");
  const handleCheckStatus = () => navigate("check-status");
  const handleRenewNOC = () => navigate("renew-application");

  return (
    <div className="container p-5">
      {/* Heading */}
      <h1
        className="text-center mb-5 display-4 fw-bold"
        style={{ color: "#582105" }}
      >
        Welcome to Your Dashboard
      </h1>

      {/* Cards Section */}
      <div className="row">
        {/* Card 1: File NOC */}
        <div className="col-md-4 mb-4">
          <div
            className="card h-100 shadow-sm border-0"
            style={{ borderRadius: "15px", transition: "transform 0.3s ease" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={handleFileNOC}
          >
            <div className="card-body text-center p-4">
              <i
                className="bi bi-file-earmark-text-fill mb-3"
                style={{ fontSize: "3rem", color: "#582105" }}
              ></i>
              <h2
                className="card-title fw-bold mb-3"
                style={{ color: "#582105" }}
              >
                File NOC
              </h2>
              <p className="card-text text-muted mb-4">
                Submit a new NOC application for fire safety certification.
              </p>
              <div
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#582105",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                File NOC
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Check Status */}
        <div className="col-md-4 mb-4">
          <div
            className="card h-100 shadow-sm border-0"
            style={{ borderRadius: "15px", transition: "transform 0.3s ease" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={handleCheckStatus}
          >
            <div className="card-body text-center p-4">
              <i
                className="bi bi-search mb-3"
                style={{ fontSize: "3rem", color: "#582105" }}
              ></i>
              <h2
                className="card-title fw-bold mb-3"
                style={{ color: "#582105" }}
              >
                Check Status
              </h2>
              <p className="card-text text-muted mb-4">
                Track the status of your submitted NOC application.
              </p>
              <div
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#582105",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Check Status
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Renew NOC */}
        <div className="col-md-4 mb-4">
          <div
            className="card h-100 shadow-sm border-0"
            style={{ borderRadius: "15px", transition: "transform 0.3s ease" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={handleRenewNOC}
          >
            <div className="card-body text-center p-4">
              <i
                className="bi bi-arrow-repeat mb-3"
                style={{ fontSize: "3rem", color: "#582105" }}
              ></i>
              <h2
                className="card-title fw-bold mb-3"
                style={{ color: "#582105" }}
              >
                Renew NOC
              </h2>
              <p className="card-text text-muted mb-4">
                Renew your existing fire safety certification.
              </p>
              <div
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#582105",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Renew NOC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Table Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="fw-bold mb-4" style={{ color: "#582105" }}>
            Your Applications
          </h2>

          {isLoading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : applications.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Application ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Submitted On</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.application._id || Math.random()}>
                      <td>{app.application._id ? app.application._id.substring(18, 24) : "N/A"}</td>
                      <td>{app.application.name || "Unknown"}</td>
                      <td>
                        <span
                          className={`badge ${
                            app.status === "approved"
                              ? "bg-success"
                              : app.status === "rejected"
                              ? "bg-danger"
                              : app.status === "submitted"
                              ? "bg-primary"
                              : app.status === "underreview"
                              ? "bg-warning"
                              : "bg-secondary"
                          }`}
                        >
                          {app.status || "Pending"}
                        </span>
                      </td>
                      <td>
                        {app.application.submittedAt
                          ? new Date(app.application.submittedAt).toLocaleDateString()
                          : "Not submitted"}
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          disabled={!app.application._id}
                          onClick={() => navigate(`/application/${app._id}`)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info">
              You don't have any applications yet. Click "File NOC" to create
              one.
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-4" style={{ color: "#582105" }}>
            Why Choose Us?
          </h2>
          <p className="lead text-muted">
            We provide a seamless and efficient process for fire safety
            certification. Our platform ensures transparency, speed, and
            compliance with all regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
