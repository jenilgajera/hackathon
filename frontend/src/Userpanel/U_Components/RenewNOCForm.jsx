import React, { useState } from "react";
import RenewProgressBarForm from "./RenewProgressBarForm"; // Import ProgressBarForm

const RenewFileNOCForm = () => {
  const [selectedStage, setSelectedStage] = useState(null);

  return (
    <div className="container p-4">
      <h1
        className="text-center mb-4 display-4 fw-bold"
        style={{ color: "#582105" }}
      >
        Fire Safety Certificate Renual Application
      </h1>
      <p className="text-center text-muted mb-5 fs-5">
        Complete the necessary steps to apply for your Fire Safety Certificate
        efficiently.
      </p>

      {
        <RenewProgressBarForm
          selectedStage={selectedStage}
          setSelectedStage={setSelectedStage}
        />
      }
    </div>
  );
};

export default RenewFileNOCForm;
