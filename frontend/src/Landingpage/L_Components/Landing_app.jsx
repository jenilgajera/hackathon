import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import L_navbar from "./L_navbar";
import L_carousle from "./L_carousle";
import L_home_heading from "./L_home_heading";
import L_Track_Applay_Qr from "./L_Track_Applay_Qr";
import HowItWorks from "./HowItWorks";
import VisionMission from "./VisionMission";
<<<<<<< Updated upstream
import L_register from "./L_register"; // Import the Register component
import L_Footer from "./L_Footer";
import L_login from "./L_login";
=======
import L_Footer from "./L_Footer";
import L_register from "./L_register"; // Import the Register component
>>>>>>> Stashed changes

const Landing_app = () => {
  return (
    <BrowserRouter>
      <L_navbar />
      <div className="container-fluid">
        <br />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <L_carousle />
                <br />
                <L_home_heading />
                <L_Track_Applay_Qr />
                <HowItWorks />
                <VisionMission />
              </>
            }
          />

          {/* Register Route */}
          <Route path="/register" element={<L_register />} />

          {/* Login Route */}
<<<<<<< Updated upstream
          <Route path="/Login" element={<L_login />} />
=======
          {/* <Route path="/login" element={<L_login />} /> */}
>>>>>>> Stashed changes
        </Routes>
      </div>
      <ConditionalFooter /> {/* Conditionally render the footer */}
      <br />
    </BrowserRouter>
  );
};

// Component to conditionally render the footer
const ConditionalFooter = () => {
  const location = useLocation(); // Get the current route location

  // Define routes where the footer should NOT be displayed
<<<<<<< Updated upstream
  const noFooterRoutes = ["/register", "/login"];
=======
  const noFooterRoutes = ["/Register", "/login"];
>>>>>>> Stashed changes

  // Check if the current route is in the noFooterRoutes array
  if (noFooterRoutes.includes(location.pathname)) {
    return null; // Don't render the footer
  }

  // Render the footer for all other routes
  return <L_Footer />;
};

export default Landing_app;