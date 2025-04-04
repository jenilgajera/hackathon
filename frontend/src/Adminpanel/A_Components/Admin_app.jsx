import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import "../Assets/css/Admin_app.css";

const Admin_app = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prevState) => !prevState);
  };

  return (
    <div className={`wrapper ${isSidebarExpanded ? "sidebar-expanded" : ""}`}>
      <Sidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="main">
        <Navbar />
        <main className="content px-3 py-4">
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Admin_app;
