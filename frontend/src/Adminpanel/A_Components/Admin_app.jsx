import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import "../Assets/css/Admin_app.css";

const Adminapp = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prevState) => !prevState);
  };

  return (
    <Router>
      <div className={`wrapper ${isSidebarExpanded ? "sidebar-expanded" : ""}`}>
        <Sidebar
          isSidebarExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
        />
        <div className="main">
          <Navbar />
          <main className="content px-3 py-4">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default Adminapp;
