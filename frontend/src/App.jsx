import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Landing_app from "./Landingpage/L_Components/Landing_app";
import Admin_app from "./Adminpanel/A_Components/Admin_app";
import UserApp from "./Userpanel/U_Components/UserApp";

function App() {
  // Set up request interceptor
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Landing_app />} />
        <Route path="/user/*" element={<UserApp />} />
        <Route path="/admin/*" element={<Admin_app />} />
      </Routes>
    </Router>
  );
}

export default App;
