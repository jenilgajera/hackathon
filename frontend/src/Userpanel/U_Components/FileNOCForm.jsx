import React, { useState } from "react";
import ProgressBarForm from "./ProgressBarForm"; // Import ProgressBarForm

const FileNOCForm = () => {
  const [selectedStage, setSelectedStage] = useState(null);

  const stages = [
    { id: 1, title: "Application Details", icon: "bi-file-text" },
    { id: 2, title: "Site Details", icon: "bi-geo-alt" },
    { id: 3, title: "Building Project Details", icon: "bi-building" },
    { id: 4, title: "Fire Safety Measures", icon: "bi-fire" },
    { id: 5, title: "Attachments", icon: "bi-paperclip" },
  ];

  const handleStageClick = (stageId) => {
    setSelectedStage(stageId);
  };

  return (
    <div className="container p-4">
      <h1
        className="text-center mb-4 display-4 fw-bold"
        style={{ color: "#582105" }}
      >
        Fire Safety Certificate Application
      </h1>
      <p className="text-center text-muted mb-5 fs-5">
        Complete the necessary steps to apply for your Fire Safety Certificate
        efficiently.
      </p>

      {!selectedStage ? (
        <div className="row g-4">
          {stages.map((stage) => (
            <div key={stage.id} className="col-md-4">
              <div
                className="card h-100 shadow-sm text-center p-4 hover-scale"
                style={{
                  borderRadius: "15px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                  border: "1px solid #e0e0e0",
                  background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(0, 0, 0, 0.1)";
                }}
                onClick={() => handleStageClick(stage.id)}
              >
                <div className="card-body">
                  <div
                    className="icon-container mb-4"
                    style={{ color: "#582105" }}
                  >
                    <i className={`bi ${stage.icon} display-4`}></i>
                  </div>
                  <h2
                    className="card-title fw-bold mb-3"
                    style={{ color: "#582105" }}
                  >
                    {stage.title}
                  </h2>
                  <p className="card-text text-muted">Click to start</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ProgressBarForm
          selectedStage={selectedStage}
          setSelectedStage={setSelectedStage}
        />
      )}
    </div>
  );
};

export default FileNOCForm;
