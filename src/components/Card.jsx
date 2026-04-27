export default function Card({ title, value, darkMode }) {
  return (
    <div style={{
      background: darkMode ? "#babace" : "white",
      color: darkMode ? "white" : "black",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      <h4 style={{ marginBottom: "10px", color: "#555" }}>{title}</h4>
      
      <h2 style={{ margin: 0 }}>
        {value !== undefined ? value : "Loading..."}
      </h2>
    </div>
  );
}