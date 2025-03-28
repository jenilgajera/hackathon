import React, { useState } from "react";
import ProgressBarForm from "./ProgressBarForm"; // Import ProgressBarForm

const FileNOCForm = () => {
  const [selectedStage, setSelectedStage] = useState(null);


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

      {
        <ProgressBarForm
          selectedStage={selectedStage}
          setSelectedStage={setSelectedStage}
        />
      }
    </div>
  );
};

export default FileNOCForm;
