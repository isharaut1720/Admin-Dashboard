import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  // ✅ Save theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
        
        <Sidebar darkMode={darkMode} />

        <div style={{
          flex: 1,
          padding: "20px",
          background: darkMode ? "#1e1e2f" : "#f0f2f5",
          color: darkMode ? "white" : "black",
          minHeight: "100vh"
        }}>
          
          {/* 🌙 Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              marginBottom: "20px",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>

          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode} />} />
            <Route path="/users" element={<Users darkMode={darkMode} />} />
            <Route path="/analytics" element={<Analytics darkMode={darkMode} />} />
            <Route path="/orders" element={<Orders darkMode={darkMode} />} />
            <Route path="/settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}