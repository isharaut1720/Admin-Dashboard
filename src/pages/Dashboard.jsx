import { useEffect, useState } from "react";
import { getStats, getChartData } from "../services/api";
import Card from "../components/Card";
import Chart from "../components/Chart";

export default function Dashboard({ darkMode }) {
  const [stats, setStats] = useState({});
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loader

  useEffect(() => {
    // ✅ Load both APIs together
    Promise.all([getStats(), getChartData()])
      .then(([statsRes, chartRes]) => {
        setStats(statsRes.data);
        setChartData(chartRes.data);
        setLoading(false); // ✅ stop loading after BOTH complete
      })
      .catch((err) => {
        console.error("Error loading data:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Loader UI
  if (loading) return <h2>Loading...</h2>;

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

      {/* ✅ Cards */}
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

      {/* ✅ Chart */}
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