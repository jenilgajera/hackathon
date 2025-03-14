import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const UserHome = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFileNOC = () => {
    navigate("file-noc"); // Navigate to the File NOC page
  };

  const handleCheckStatus = () => {
    navigate("check-status"); // Navigate to the Check Status page
  };

  const handleRenewNOC = () => {
    navigate("renew-application"); // Navigate to the Renew Application page
  };

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
            onClick={handleFileNOC} // Add onClick handler
          >
            <div className="card-body text-center p-4">
              {/* Icon */}
              <i
                className="bi bi-file-earmark-text-fill mb-3"
                style={{ fontSize: "3rem", color: "#582105" }}
              ></i>
              {/* Title */}
              <h2
                className="card-title fw-bold mb-3"
                style={{ color: "#582105" }}
              >
                File NOC
              </h2>
              {/* Description */}
              <p className="card-text text-muted mb-4">
                Submit a new NOC application for fire safety certification.
                Ensure your property complies with safety regulations.
              </p>
              {/* Button */}
              <div
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#582105",
                  color: "white",
                  borderRadius: "10px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#a44a1e")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#582105")}
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
            onClick={handleCheckStatus} // Add onClick handler
          >
            <div className="card-body text-center p-4">
              {/* Icon */}
              <i
                className="bi bi-search mb-3"
                style={{ fontSize: "3rem", color: "#582105" }}
              ></i>
              {/* Title */}
              <h2
                className="card-title fw-bold mb-3"
                style={{ color: "#582105" }}
              >
                Check Status
              </h2>
              {/* Description */}
              <p className="card-text text-muted mb-4">
                Track the status of your submitted NOC application. Stay updated
                on the progress of your certification.
              </p>
              {/* Button */}
              <div
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#582105",
                  color: "white",
                  borderRadius: "10px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#a44a1e")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#582105")}
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
            onClick={handleRenewNOC} // Add onClick handler
          >
            <div className="card-body text-center p-4">
              {/* Icon */}
              <i
                className="bi bi-arrow-repeat mb-3"
                style={{ fontSize: "3rem", color: "#582105" }}
              ></i>
              {/* Title */}
              <h2
                className="card-title fw-bold mb-3"
                style={{ color: "#582105" }}
              >
                Renew NOC
              </h2>
              {/* Description */}
              <p className="card-text text-muted mb-4">
                Renew your existing fire safety certification. Ensure your
                property remains compliant with the latest safety standards.
              </p>
              {/* Button */}
              <div
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#582105",
                  color: "white",
                  borderRadius: "10px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#a44a1e")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#582105")}
              >
                Renew NOC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
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
