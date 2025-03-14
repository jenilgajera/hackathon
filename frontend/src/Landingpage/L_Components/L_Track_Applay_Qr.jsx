import React from "react";
import Lottie from "lottie-react"; // Import Lottie
import "../Assets/css/L_Track_Applay_Qr.css"; // Import custom CSS for styling
import applyAnimation from "../Assets/icon/doc.json"; // Lottie JSON for Apply
import trackAnimation from "../Assets/icon/track.json"; // Lottie JSON for Track
import scanAnimation from "../Assets/icon/scan.json"; // Lottie JSON for Scan

const L_Track_Applay_Qr = () => {
  return (
    <div className="track-apply-qr py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {/* Card 1: Apply for Fire NOC */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-4">
                {/* Lottie Icon */}
                <div
                  className="mb-3"
                  style={{ width: "60px", height: "60px", margin: "0 auto" }}
                >
                  <Lottie animationData={applyAnimation} loop={true} />
                </div>
                <h5 className="card-title fw-bold text-dark mb-3">
                  Apply for Fire NOC
                </h5>
                <p className="card-text text-muted mb-4">
                  Submit a new application for Fire NOC certification.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Start Application →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Track Application */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-4">
                {/* Lottie Icon */}
                <div
                  className="mb-3"
                  style={{ width: "60px", height: "60px", margin: "0 auto" }}
                >
                  <Lottie animationData={trackAnimation} loop={true} />
                </div>
                <h5 className="card-title fw-bold text-dark mb-3">
                  Track Application
                </h5>
                <p className="card-text text-muted mb-4">
                  Check the status of your existing application.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Track Now →
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Scan QR Code */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-4">
                {/* Lottie Icon */}
                <div
                  className="mb-3"
                  style={{ width: "100px", height: "100px", margin: "0 auto" }}
                >
                  <Lottie animationData={scanAnimation} loop={true} />
                </div>
                <h5 className="card-title fw-bold text-dark mb-3">
                  Scan QR Code
                </h5>
                <p className="card-text text-muted mb-4">
                  Access your approved NOC certificate.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Scan QR →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default L_Track_Applay_Qr;