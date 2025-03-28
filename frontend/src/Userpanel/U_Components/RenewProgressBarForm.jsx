import React, { useState } from "react";
import "../Assets/css/Userstyle.css";
import RenewApplicationDetails from "./RenewApplicationDetails";
import { RenewSiteDetails } from "./RenewSiteDetails";
import { RenewBuildingProjectDetails } from "./RenewBuildingProjectDetails";
import { RenewFireSafetyMeasures } from "./RenewFireSafetyMeasures";
import { RenewAttachments } from "./RenewAttachments";

const ProgressBarForm = ({ selectedStage, setSelectedStage }) => {
  const [currentStep, setCurrentStep] = useState(selectedStage || 1);

  const steps = [
    { id: 1, title: "Application Details" },
    { id: 2, title: "Site Details" },
    { id: 3, title: "Building Project Details" },
    { id: 4, title: "Fire Safety Measures" },
    { id: 5, title: "Attachments" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setSelectedStage(nextStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setSelectedStage(prevStep);
    }
  };

  // New function to handle step click
  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
    setSelectedStage(stepId);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <RenewApplicationDetails />;
      case 2:
        return <RenewSiteDetails />;
      case 3:
        return <RenewBuildingProjectDetails />;
      case 4:
        return <RenewFireSafetyMeasures />;
      case 5:
        return <RenewAttachments />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid p-4">
      {/* Progress Bar Section */}
      <div className="card shadow-sm border-0 rounded-lg p-3 mb-4">
        <div className="progress-bar-container">
          <div className="d-flex justify-content-between align-items-center position-relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`progress-step ${
                  currentStep > step.id ? "completed" : ""
                } ${currentStep === step.id ? "active" : ""}`}
                onClick={() => handleStepClick(step.id)}
                style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-title">{step.title}</div>
              </div>
            ))}
            <div className="progress-line">
              <div
                className="progress-line-fill"
                style={{
                  width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content Section */}
      <div className="card shadow-sm border-0 rounded-lg">
        <div
          className="card-header bg-gradient text-white  py-3"
          style={{ background: "#582105" }}
        >
          <h4 className="mb-0">{steps[currentStep - 1].title}</h4>
        </div>
        <div className="card-body p-4">
          <div className="form-content p-3">{renderStep()}</div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-outline-secondary btn-lg rounded-pill px-4"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          <i className="bi bi-arrow-left me-2"></i>Previous
        </button>
        <button
          className="btn btn-primary btn-lg rounded-pill px-4"
          onClick={handleNext}
          disabled={currentStep === steps.length}
        >
          Next<i className="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ProgressBarForm;
