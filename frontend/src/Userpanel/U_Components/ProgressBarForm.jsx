import React, { useState } from "react";
import { ApplicationDetails } from "./ApplicationDetails ";
import { SiteDetails } from "./SiteDetails";
import { BuildingProjectDetails } from "./BuildingProjectDetails";
import { FireSafetyMeasures } from "./FireSafetyMeasures";
import { Attachments } from "./Attachments";
import "../Assets/css/Userstyle.css";


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
      setSelectedStage(nextStep); // Update the selected stage
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setSelectedStage(prevStep); // Update the selected stage
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ApplicationDetails />;
      case 2:
        return <SiteDetails />;
      case 3:
        return <BuildingProjectDetails />;
      case 4:
        return <FireSafetyMeasures />;
      case 5:
        return <Attachments />;
      default:
        return null;
    }
  };

  return (
    <div className="progress-bar-form">
      {/* Step-Based Progress Bar */}
      <div className="progress-bar-container mb-4">
        <div className="d-flex justify-content-between align-items-center">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`progress-step ${
                currentStep > step.id ? "completed" : ""
              } ${currentStep === step.id ? "active" : ""}`}
            >
              <div className="step-number">{index + 1}</div>{" "}
              {/* Use index + 1 for step number */}
              <div className="step-title">{step.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="form-content">{renderStep()}</div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons mt-4">
        <button
          className="btn btn-secondary me-2"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressBarForm;
