import { useEffect, useState } from "react";
import { getStats, getChartData } from "../services/api";
import Card from "../components/Card";
import Chart from "../components/Chart";

export default function Dashboard({ darkMode }) {
  const [stats, setStats] = useState({});
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getStats().then(res => {
      console.log("Stats:", res.data);
      setStats(res.data);
    });

    getChartData().then(res => {
      console.log("Chart:", res.data);
      setChartData(res.data);
    });
  }, []);

  return (
    <div>
      <h1 style={{
        color: darkMode ? "#ffffff" : "#111",
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "20px"
      }}>
        Dashboard
      </h1>

      {/* ✅ Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "30px"
      }}>
        <Card title="Users" value={stats.users} darkMode={darkMode} />
        <Card title="Revenue" value={stats.revenue} darkMode={darkMode} />
        <Card title="Orders" value={stats.orders} darkMode={darkMode} />
        <Card title="Growth %" value={stats.growth} darkMode={darkMode} />
      </div>

      {/* ✅ Chart Section */}
      <div style={{
        background: darkMode ? "#2c2c3e" : "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ marginBottom: "20px" }}>Analytics</h2>
        <Chart data={chartData} />
      </div>
    </div>
  );
}