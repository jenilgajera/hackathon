import React from "react";
import "../Assets/css/VisionMission.css"; // Import custom CSS for styling

const VisionMission = () => {
  return (
    <div className="vision-mission py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Vision & Mission</h2>
        <div className="row g-4">
          {/* Vision Section */}
          <div className="col-md-6">
            <div className="vision-card p-4 bg-white rounded shadow-sm">
              <h3 className="text-center mb-4">Our Vision</h3>
              <p className="text-center">
                To create a fire-safe Gujarat where every individual and
                organization is equipped with the knowledge and tools to prevent
                and respond to fire emergencies effectively.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="col-md-6">
            <div className="mission-card p-4 bg-white rounded shadow-sm">
              <h3 className="text-center mb-4">Our Mission</h3>
              <p className="text-center">
                To provide a seamless, transparent, and efficient platform for
                fire safety compliance, ensuring the safety and well-being of
                citizens and businesses across Gujarat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;