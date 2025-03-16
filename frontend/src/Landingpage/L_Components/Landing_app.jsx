import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import L_navbar from "./L_navbar";
import L_carousle from "./L_carousle";
import L_home_heading from "./L_home_heading";
import L_Track_Applay_Qr from "./L_Track_Applay_Qr";
import HowItWorks from "./HowItWorks";
import VisionMission from "./VisionMission";
import L_register from "./L_register";
import L_login from "./L_login";
import L_Footer from "./L_Footer";

const Landing_app = () => {
  return (
    <BrowserRouter>
      <L_navbar />
      <div className="container-fluid">
        <br />
        <Routes>
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
          <Route path="/register" element={<L_register />} />
          <Route path="/login" element={<L_login />} />
        </Routes>
      </div>
      <ConditionalFooter />
      <br />
    </BrowserRouter>
  );
};

const ConditionalFooter = () => {
  const location = useLocation();
  const noFooterRoutes = ["/register", "/login"]; // Single correct definition

  if (noFooterRoutes.includes(location.pathname.toLowerCase())) {
    return null;
  }

  return <L_Footer />;
};

export default Landing_app;
