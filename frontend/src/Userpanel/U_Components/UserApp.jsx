import React from "react";
import { Routes, Route } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import UserHome from "./UserHome";
import FileNOCForm from "./FileNOCForm";
import CheckStatus from "./CheckStatus";
import ContactUs from "./ContactUs";
import RenewNOCForm from "./RenewNOCForm";
import QRCodeView from "./QRCodeView";
import VerifyCertificate from "./VerifyCertificate";

const UserApp = () => {
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route index element={<UserHome />} />
        <Route path="file-noc/*" element={<FileNOCForm />} />
        <Route path="check-status" element={<CheckStatus />} />
        <Route path="renew-application" element={<RenewNOCForm />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="application/:id/qr-code" element={<QRCodeView />} />
        <Route
          path="verify-certificate/:certificateNumber"
          element={<VerifyCertificate />}
        />
      </Routes>
      <UserFooter />
    </>
  );
};

export default UserApp;
