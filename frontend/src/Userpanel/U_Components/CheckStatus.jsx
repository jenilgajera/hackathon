import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CheckStatus = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedForm, setSelectedForm] = useState(null); // State to track selected form for modal
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Demo data for form status
  const formStatusData = [
    {
      id: 1,
      applicationNumber: "FSC-20231001",
      applicantName: "Rahul Sharma",
      submissionDate: "2023-10-01",
      status: "Under Review",
      remarks: "Awaiting fire safety inspection.",
      name: "Rahul Sharma",
      mobileNumber: "9876543210",
      emailId: "rahul.sharma@example.com",
      alternateMobileNumber: "9876543211",
      alternateEmailId: "rahul.sharma2@example.com",
      district: "Mumbai",
      plotNo: "Plot No. 123",
      area: "Andheri East",
      landmark: "Near XYZ Mall",
      taluka: "Andheri",
      pinCode: "400069",
      architectName: "Ar. Rajesh Mehta",
      architectRegistrationNo: "AOR-12345",
    },
    {
      id: 2,
      applicationNumber: "FSC-20231005",
      applicantName: "Priya Joshi",
      submissionDate: "2023-10-05",
      status: "Approved",
      remarks: "Certificate issued on 2023-10-10.",
      name: "Priya Joshi",
      mobileNumber: "9876543220",
      emailId: "priya.joshi@example.com",
      alternateMobileNumber: "9876543221",
      alternateEmailId: "priya.joshi2@example.com",
      district: "Pune",
      plotNo: "House No. 456",
      area: "Kothrud",
      landmark: "Near ABC School",
      taluka: "Kothrud",
      pinCode: "411038",
      architectName: "Ar. Sunita Desai",
      architectRegistrationNo: "AOR-67890",
    },
    {
      id: 3,
      applicationNumber: "FSC-20231010",
      applicantName: "Amit Singh",
      submissionDate: "2023-10-10",
      status: "Rejected",
      remarks: "Incomplete documentation.",
      name: "Amit Singh",
      mobileNumber: "9876543230",
      emailId: "amit.singh@example.com",
      alternateMobileNumber: "9876543231",
      alternateEmailId: "amit.singh2@example.com",
      district: "Delhi",
      plotNo: "Flat No. 789",
      area: "Saket",
      landmark: "Near PQR Hospital",
      taluka: "Saket",
      pinCode: "110017",
      architectName: "Ar. Vikram Yadav",
      architectRegistrationNo: "AOR-54321",
    },
  ];

  const handleBackToDashboard = () => {
    navigate("/"); // Navigate back to the dashboard
  };

  const handleKnowMore = (form) => {
    setSelectedForm(form); // Set the selected form data
    setShowModal(true); // Show the modal
  };

  const handleDownloadCertificate = () => {
    alert("Downloading certificate..."); // Placeholder for download functionality
  };

  return (
    <div className="container p-5">
      {/* Heading */}
      <h1
        className="text-center display-4 fw-bold"
        style={{ color: "#582105" }}
      >
        Check Application Status
      </h1>
      <p className="text-center text-muted mb-5 fs-5">
        Verify and ensure all details are correctly filled before proceeding.
      </p>
      {/* Status Cards Section */}
      <div className="row g-4">
        {formStatusData.map((form) => (
          <div key={form.id} className="col-md-6">
            <div
              className="card h-100 shadow-sm border-0 hover-scale"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border: "2px solid transparent",
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(45deg, #582105, #a44a1e) border-box",
              }}
            >
              <div className="card-body p-4">
                <h3
                  className="card-title fw-bold mb-3"
                  style={{ color: "#582105" }}
                >
                  Application Number: {form.applicationNumber}
                </h3>
                <div className="mb-3">
                  <strong>Applicant Name:</strong> {form.applicantName}
                </div>
                <div className="mb-3">
                  <strong>Submission Date:</strong> {form.submissionDate}
                </div>
                <div className="mb-3">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`badge ${
                      form.status === "Approved"
                        ? "bg-success"
                        : form.status === "Rejected"
                        ? "bg-danger"
                        : "bg-warning"
                    }`}
                  >
                    {form.status}
                  </span>
                </div>
                <div className="mb-3">
                  <strong>Remarks:</strong> {form.remarks}
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleKnowMore(form)}
                  >
                    <i className="bi bi-info-circle me-2"></i>Know More
                  </button>
                  {form.status === "Approved" && (
                    <button
                      className="btn btn-success"
                      onClick={handleDownloadCertificate}
                    >
                      <i className="bi bi-download me-2"></i>Download
                      Certificate
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Back to Dashboard Button */}
      <div className="text-center mt-5">
        <button
          className="btn btn-lg rounded-pill px-4"
          style={{
            backgroundColor: "#582105",
            color: "white",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#a44a1e")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#582105")}
          onClick={handleBackToDashboard}
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Dashboard
        </button>
      </div>

      {/* Bootstrap Modal */}
      {selectedForm && (
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{
                  background: "linear-gradient(45deg, #582105, #a44a1e)",
                  color: "white",
                }}
              >
                <h5 className="modal-title fw-bold">Application Details</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  {/* Personal Details Card */}
                  <div className="col-md-6">
                    <div className="section-container position-relative mb-4">
                      {/* Personal Details Header */}
                      <div
                        className="section-header position-absolute bg-white px-3 py-1 rounded"
                        style={{ top: "-15px", left: "20px", zIndex: 1 }}
                      >
                        <h5 className="mb-0" style={{ color: "#582105" }}>
                          Personal Details
                        </h5>
                      </div>

                      {/* Personal Details Content */}
                      <div
                        className="section-content bg-light p-4 border-2 rounded-3"
                        style={{
                          border: "2px solid #582105",
                          paddingTop: "30px",
                        }}
                      >
                        <p>
                          <strong>Name:</strong> {selectedForm.name}
                        </p>
                        <p>
                          <strong>Mobile Number:</strong>{" "}
                          {selectedForm.mobileNumber}
                        </p>
                        <p>
                          <strong>Status:</strong> {selectedForm.status}
                        </p>
                        <p>
                          <strong>Email ID:</strong> {selectedForm.emailId}
                        </p>
                        <p>
                          <strong>Alternate Mobile Number:</strong>{" "}
                          {selectedForm.alternateMobileNumber}
                        </p>
                        <p>
                          <strong>Alternate Email ID:</strong>{" "}
                          {selectedForm.alternateEmailId}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Location Details Card */}
                  <div className="col-md-6">
                    <div className="section-container position-relative mb-4">
                      {/* Location Details Header */}
                      <div
                        className="section-header position-absolute bg-white px-3 py-1 rounded"
                        style={{ top: "-15px", left: "20px", zIndex: 1 }}
                      >
                        <h5 className="mb-0" style={{ color: "#582105" }}>
                          Location Details
                        </h5>
                      </div>

                      {/* Location Details Content */}
                      <div
                        className="section-content bg-light p-4 border-2 rounded-3"
                        style={{
                          border: "2px solid #582105",
                          paddingTop: "30px",
                        }}
                      >
                        <p>
                          <strong>District:</strong> {selectedForm.district}
                        </p>
                        <p>
                          <strong>Plot/ House No.:</strong>{" "}
                          {selectedForm.plotNo}
                        </p>
                        <p>
                          <strong>Area/ Colony/ Street:</strong>{" "}
                          {selectedForm.area}
                        </p>
                        <p>
                          <strong>Landmark:</strong> {selectedForm.landmark}
                        </p>
                        <p>
                          <strong>Taluka:</strong> {selectedForm.taluka}
                        </p>
                        <p>
                          <strong>Pin Code:</strong> {selectedForm.pinCode}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Architect Details Card */}
                  <div className="col-md-12">
                    <div className="section-container position-relative mb-4">
                      {/* Architect Details Header */}
                      <div
                        className="section-header position-absolute bg-white px-3 py-1 rounded"
                        style={{ top: "-15px", left: "20px", zIndex: 1 }}
                      >
                        <h5 className="mb-0" style={{ color: "#582105" }}>
                          Architect/ Engineer Details
                        </h5>
                      </div>

                      {/* Architect Details Content */}
                      <div
                        className="section-content bg-light p-4 border-2 rounded-3"
                        style={{
                          border: "2px solid #582105",
                          paddingTop: "30px",
                        }}
                      >
                        <p>
                          <strong>Name:</strong> {selectedForm.architectName}
                        </p>
                        <p>
                          <strong>Registration No.:</strong>{" "}
                          {selectedForm.architectRegistrationNo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckStatus;
