export default function Settings({ darkMode, setDarkMode }) {
  return (
    <div>
      <h1 style={{
        color: darkMode ? "#ffffff" : "#111",
        fontSize: "28px",
        marginBottom: "20px"
      }}>
        Settings
      </h1>

      <div style={{
        background: darkMode ? "#2c2c3e" : "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h3>Theme</h3>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "10px 15px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}