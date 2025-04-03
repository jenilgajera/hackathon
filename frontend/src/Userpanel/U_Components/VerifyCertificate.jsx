// 3. Add certificate verification component
// Create a new file: src/Components/Certificate/VerifyCertificate.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const VerifyCertificate = () => {
  const { certificateNumber } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyCertificate = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/certificates/verify/${certificateNumber}`);
        setCertificate(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to verify certificate");
      } finally {
        setLoading(false);
      }
    };

    if (certificateNumber) {
      verifyCertificate();
    }
  }, [certificateNumber]);

  if (loading) {
    return (
      <div className="container p-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Verifying certificate...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container p-5">
        <div className="alert alert-danger">
          <h4>Verification Failed</h4>
          <p>{error}</p>
        </div>
        <div className="text-center mt-4">
          <Link to="/" className="btn btn-primary">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header text-center" style={{ backgroundColor: certificate?.valid ? "#ebf7ee" : "#f8d7da" }}>
              <h2 className="my-2" style={{ color: certificate?.valid ? "#28a745" : "#dc3545" }}>
                Certificate {certificate?.valid ? "Valid" : "Invalid"}
              </h2>
            </div>
            <div className="card-body">
              {certificate?.valid ? (
                <div className="text-center mb-4">
                  <i className="bi bi-check-circle-fill" style={{ fontSize: "4rem", color: "#28a745" }}></i>
                  <p className="lead mt-3">This certificate is authentic and valid.</p>
                </div>
              ) : (
                <div className="text-center mb-4">
                  <i className="bi bi-x-circle-fill" style={{ fontSize: "4rem", color: "#dc3545" }}></i>
                  <p className="lead mt-3">
                    {certificate?.expired ? "This certificate has expired." : "This certificate is not valid."}
                  </p>
                </div>
              )}

              <div className="certificate-details">
                <h4 className="mb-4">Certificate Details</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Certificate Number</th>
                      <td>{certificate?.certificate?.number}</td>
                    </tr>
                    <tr>
                      <th scope="row">Issued To</th>
                      <td>{certificate?.certificate?.issuedTo}</td>
                    </tr>
                    <tr>
                      <th scope="row">Issue Date</th>
                      <td>{new Date(certificate?.certificate?.issuedDate).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <th scope="row">Expiry Date</th>
                      <td>{new Date(certificate?.certificate?.expiryDate).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <th scope="row">Status</th>
                      <td>
                        <span className={`badge ${
                          certificate?.certificate?.status === "Valid" 
                            ? "bg-success" 
                            : certificate?.certificate?.status === "Expired" 
                              ? "bg-warning"
                              : "bg-danger"
                        }`}>
                          {certificate?.certificate?.status}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer text-center">
              <p className="text-muted small">
                This verification was performed on {new Date().toLocaleString()}
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/" className="btn" style={{
              backgroundColor: "#582105",
              color: "white",
              borderRadius: "10px",
            }}>Return to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;