import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}