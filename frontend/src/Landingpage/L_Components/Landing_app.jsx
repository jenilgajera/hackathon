import React from "react";
import L_navbar from "./L_navbar";
import L_carousle from "./L_carousle";
import L_home_heading from "./L_home_heading";
import L_Track_Applay_Qr from "./L_Track_Applay_Qr";
import HowItWorks from "./HowItWorks";
import VisionMission from "./VisionMission";

const Landing_app = () => {
  return (
    <>
      <L_navbar />
      <div className="container-fluid">
        <br />
        <L_carousle />
        <br />
        <L_home_heading/>
        <L_Track_Applay_Qr/>
        <HowItWorks/>
        <VisionMission/>
      </div>
      <br />
    </>
  );
};

export default Landing_app;
