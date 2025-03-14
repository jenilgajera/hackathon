import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import UserHome from "./UserHome";
import FileNOCForm from "./FileNOCForm";

const UserApp = () => {
  return (
    <Router>
      {/* Navbar */}
      <UserNavbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/file-noc" element={<FileNOCForm />} />{" "}
        {/* Add this route */}
        {/* <Route path="/user/file-noc" element={<FileNOCForm />} />
        <Route path="/user/check-status" element={<CheckStatus />} />
        <Route path="/user/renew-application" element={<RenewApplication />} /> */}
      </Routes>

      {/* Footer */}
      <UserFooter />
    </Router>
  );
};

export default UserApp;
