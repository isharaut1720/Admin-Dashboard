import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import axios from "axios";

export default function Users({ darkMode }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers().then(res => {
      setUsers(res.data);
    });
  };

  // ✅ ADD USER
  const addUser = () => {
    if (!name || !email) return alert("Fill all fields");

    const newId =
      users.length > 0
        ? Math.max(...users.map(user => Number(user.id))) + 1
        : 1;

    axios.post("http://localhost:5000/users", {
      id: newId,
      name,
      email
    }).then(() => {
      setName("");
      setEmail("");
      fetchUsers();
    });
  };

  // ❌ DELETE USER
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        fetchUsers();
      });
  };

  // 🔍 FILTER
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      color: darkMode ? "white" : "black"
    }}> 
      <h1 style={{
        color: darkMode ? "#ffffff" : "#111",
        fontSize: "28px",
        marginBottom: "20px"
      }}>
        Users
      </h1>

      {/* ✅ ADD USER FORM */}
      <div style={{
        padding: "10px",
        marginRight: "10px",
        borderRadius: "6px",
        background: darkMode ? "#1e1e2f" : "white",
        color: darkMode ? "white" : "black",
        border: "1px solid #ccc"
      }}>
        <h3>Add User</h3>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", borderRadius: "6px" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", borderRadius: "6px" }}
        />

        <button
          onClick={addUser}
          style={{
            padding: "10px 15px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </div>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "95%",
          borderRadius: "8px",
          background: darkMode ? "#1e1e2f" : "white",
          color: darkMode ? "white" : "black",
          border: "1px solid #ccc"
        }}
      />

      {/* 📋 TABLE */}
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        background: darkMode ? "#2c2c3e" : "white",
        color: darkMode ? "white" : "black",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <table width="100%" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "center", borderBottom: "2px solid #eee" }}>
              <th style={{ padding: "10px" }}>S.No</th>
              <th style={{ padding: "10px" }}>Name</th>
              <th style={{ padding: "10px" }}>Email</th>
              <th style={{ padding: "10px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  style={{
                    borderBottom: "1px solid #eee",
                    transition: "0.2s"
                  }}
                  onMouseEnter={(e) =>
                    e.currentTarget.style.background = darkMode ? "#3a3a5a" : "#f9f9f9"
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.style.background = "transparent"
                  }
                >
                  <td style={{ padding: "10px" }}>{index + 1}</td>
                  <td style={{ padding: "10px" }}>{user.name}</td>
                  <td style={{ padding: "10px" }}>{user.email}</td>
                  <td style={{ padding: "10px" }}>
                    <button
                      onClick={() => deleteUser(user.id)}
                      style={{
                        background: "#ff4d4f",
                        color: "white",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        cursor: "pointer"
                      }}
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}