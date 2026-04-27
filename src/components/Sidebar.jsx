import { NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaUsers, 
  FaChartBar, 
  FaBox, 
  FaCog 
} from "react-icons/fa";

export default function Sidebar({ darkMode }) {
  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    textDecoration: "none",
    color: "white",
    borderRadius: "6px",
    marginBottom: "8px"
  };

  return (
    <div style={{
      width: window.innerWidth < 768 ? "100%" : "220px",
      height: window.innerWidth < 768 ? "auto" : "100vh",
      background: "#111",
      color: "white",
      padding: "20px"
    }}>
      <h2 style={{ 
        color: "white",
        fontWeight: "bold",
        marginBottom: "20px"
      }}>
        Dashboard
      </h2>

      <NavLink to="/" style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? "#2563eb" : "transparent"
      })}>
        <FaHome /> Home
      </NavLink>

      <NavLink to="/users" style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? "#2563eb" : "transparent"
      })}>
        <FaUsers /> Users
      </NavLink>

      <NavLink to="/analytics" style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? "#2563eb" : "transparent"
      })}>
        <FaChartBar /> Analytics
      </NavLink>

      <NavLink to="/orders" style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? "#2563eb" : "transparent"
      })}>
        <FaBox /> Orders
      </NavLink>

      <NavLink to="/settings" style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? "#2563eb" : "transparent"
      })}>
        <FaCog /> Settings
      </NavLink>
    </div>
  );
}