import React, { useState } from "react";
import ProgressBarForm from "./ProgressBarForm"; // Import ProgressBarForm

const FileNOCForm = () => {
  const [selectedStage, setSelectedStage] = useState(null);

  const stages = [
    { id: 1, title: "Application Details" },
    { id: 2, title: "Site Details" },
    { id: 3, title: "Building Project Details" },
    { id: 4, title: "Fire Safety Measures" },
    { id: 5, title: "Attachments" },
  ];

  const handleStageClick = (stageId) => {
    setSelectedStage(stageId);
  };

  return (
    <div className="container p-5">
      <h1
        className="text-center mb-5 display-4 fw-bold"
        style={{ color: "#582105" }}
      >
        Fire Safety Certificate Application
      </h1>

      {!selectedStage ? (
        <div className="row">
          {stages.map((stage) => (
            <div key={stage.id} className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-sm border-0 text-center p-4"
                style={{ cursor: "pointer", borderRadius: "15px" }}
                onClick={() => handleStageClick(stage.id)}
              >
                <h2 className="card-title fw-bold" style={{ color: "#582105" }}>
                  {stage.title}
                </h2>
                <p className="card-text text-muted">Click to start</p>
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
