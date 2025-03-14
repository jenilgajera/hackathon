import React from "react";
import "../Assets/css/HowItWorks.css"; // Import custom CSS for styling

const HowItWorks = () => {
  return (
    <div className="note-container py-4 bg-light border-1 rounded-3 position-relative">
      {/* Note Label on the Border Line */}
      <div className="note-label position-absolute text-white px-3 py-1 rounded">
        Note
      </div>
      <div className="container mt-3">
        <div className="row g-3">
          {/* Step 1 */}
          <div className="col-md-12">
            <div className="step bg-white p-3 rounded shadow-sm ms-3"> {/* Added ms-3 for left margin */}
              <span className="fw-bold">Step 1:</span> Fill out the application form with accurate details.
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="col-md-12">
            <div className="step bg-white p-3 rounded shadow-sm ms-3"> {/* Added ms-3 for left margin */}
              <span className="fw-bold">Step 2:</span> Upload the required documents.
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="col-md-12">
            <div className="step bg-white p-3 rounded shadow-sm ms-3"> {/* Added ms-3 for left margin */}
              <span className="fw-bold">Step 3:</span> Submit the form and track your application status.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;