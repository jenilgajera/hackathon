import React, { useState } from "react";
import { ApplicationDetails } from "./ApplicationDetails ";
import { SiteDetails } from "./SiteDetails";
import { BuildingProjectDetails } from "./BuildingProjectDetails";
import { FireSafetyMeasures } from "./FireSafetyMeasures";
import { Attachments } from "./Attachments";

const WizardForm = ({ selectedStage, setSelectedStage }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
    <div className="wizard-form">
      <div className="progress-indicator mb-4">
        <h5>
          Step {currentStep} of 5:{" "}
          {selectedStage === 1
            ? "Application Details"
            : selectedStage === 2
            ? "Site Details"
            : selectedStage === 3
            ? "Building Project Details"
            : selectedStage === 4
            ? "Fire Safety Measures"
            : "Attachments"}
        </h5>
      </div>

      <div className="form-content">{renderStep()}</div>

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
          disabled={currentStep === 5}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WizardForm;
