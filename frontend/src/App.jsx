import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_app from "./Landingpage/L_Components/Landing_app";
import Admin_app from "./Adminpanel/A_Components/Admin_app";
import UserApp from "./Userpanel/U_Components/UserApp";

function App() {
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
