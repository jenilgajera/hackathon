import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <aside id="sidebar" className={isExpanded ? "expand" : ""}>
      <div className="d-flex">
        <button className="toggle-btn" type="button" onClick={toggleSidebar}>
          <i className="bi bi-grid"></i> {/* Sidebar toggle icon */}
        </button>
        <div className="sidebar-logo">
          <NavLink to="/" className="navbar-brand fs-2">
            RNV
          </NavLink>{" "}
          {/* Branding for Sidebar */}
        </div>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-house-door me-2"></i> {/* Home icon */}
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/AdminAddMembers"
            className={({ isActive }) =>
              `sidebar-link d-flex align-items-center ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="bi bi-person-plus me-2"></i> {/* User Plus icon */}
            <span className="sidebar-text">Admin Add Members</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/adminMaintenancePage"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-gear-fill"></i>{" "}
            {/* Tools icon for Maintenance */}
            <span>Maintenance</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/adminComplaints"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-exclamation-circle-fill"></i>{" "}
            {/* Complaints icon */}
            <span>Complaints</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/adminHallBookingPage"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-calendar-check-fill"></i>{" "}
            {/* Calendar Check icon for Hall Booking */}
            <span>Hall Booking</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/adminNoticeBoardPage"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-postcard"></i>{" "}
            {/* Postcard icon for Notice Board */}
            <span>Notice Board</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/adminVisitorManagementPage"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-person"></i> {/* Example: Person icon */}
            <span>Visitor Management</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/adminVehicleInfoPage"
            className={({ isActive }) =>
              `sidebar-link d-flex align-items-center gap-2 ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="bi bi-car-front"></i>{" "}
            {/* Replaced with a car icon for better context */}
            <span>Vehicle Info</span>
          </NavLink>
        </li>
        {/* <li className="sidebar-item">
          <a
            href="#auth"
            className="sidebar-link has-dropdown"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="bi bi-shield-lock"></i>{" "}
            <span>Authentication</span>
          </a>
          <ul id="auth" className="sidebar-dropdown list-unstyled collapse">
            <li className="sidebar-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-box-arrow-in-right"></i>
                Login
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-person-plus"></i> 
                Register
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/notification"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-bell-fill"></i>
            <span>Notifications</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </NavLink>
        </li> */}
      </ul>
      <div className="sidebar-footer">
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className="bi bi-box-arrow-left"></i> {/* Logout icon */}
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
