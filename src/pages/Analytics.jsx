import { useEffect, useState } from "react";
import { getChartData } from "../services/api";
import Chart from "../components/Chart";

export default function Analytics({ darkMode }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getChartData().then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1 style={{
        color: darkMode ? "#ffffff" : "#111",
        fontSize: "28px",
        marginBottom: "20px"
      }}>
        Analytics
      </h1>

      <div style={{
        background: darkMode ? "#2c2c3e" : "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <Chart data={data} />
      </div>
    </div>
  );
}