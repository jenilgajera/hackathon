// src/Components/Application/QRCodeView.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { applicationApi } from "../../Services/apiService";
import CertificateDownload from "./CertificateDownload";

const QRCodeView = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [certificateUrl, setCertificateUrl] = useState("");

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        console.log(id);
        setLoading(true);
        const response = await applicationApi.getApplicationDetails(id);
        setApplication(response.data);
        console.log(response.data);
        // console.log(response.data.application.status);
        if (response.data.application.status !== "approved") {
          setError("This application is not approved yet.");
        }

        // Set the certificate URL (use environment URL if available)
        const baseUrl = "http://localhost:5000" || window.location.origin;
        setCertificateUrl(`${baseUrl}/api/applications/${id}/certificate`);
      } catch (err) {
        // setError("Failed to load application details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [id]);

  // Handle direct certificate download
  const downloadCertificate = () => {
    window.open(certificateUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="container p-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container p-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h2 className="card-title mb-4" style={{ color: "#582105" }}>
                Fire Safety Certificate QR Code
              </h2>
              <p className="text-muted mb-4">
                Scan this QR code to download your approved fire safety
                certificate
              </p>

              <div className="mb-4 d-flex justify-content-center">
                <div
                  style={{
                    background: "white",
                    padding: "20px",
                    border: "1px solid #ddd",
                  }}
                >
                  <QRCode
                    value={certificateUrl}
                    size={250}
                    level="H"
                    renderAs="svg"
                  />
                </div>
              </div>

              <div className="mb-4">
                <h5>Application Details:</h5>
                <p>
                  <strong>Application ID:</strong> {application.application._id}
                </p>
                <p>
                  <strong>Name:</strong> {application.application.name}
                </p>
                <p>
                  <strong>Status:</strong> {application.application.status}
                </p>
                <p>
                  <strong>Approved Date:</strong>{" "}
                  {new Date(
                    application.application.submittedAt ||
                      application.application.processedAt
                  ).toLocaleDateString()}
                </p>
              </div>

              <div className="d-flex justify-content-center mt-4">
                <CertificateDownload applicationId={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeView;
