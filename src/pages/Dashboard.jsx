import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

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

  // ✅ ADD USER (LOCAL STATE ONLY)
  const addUser = () => {
    if (!name || !email) {
      return alert("Fill all fields");
    }

    if (!email.includes("@")) {
      return alert("Invalid email");
    }

    const newId =
      users.length > 0
        ? Math.max(...users.map(user => Number(user.id))) + 1
        : 1;

    const newUser = {
      id: newId,
      name,
      email
    };

    setUsers([...users, newUser]); // ✅ local update

    setName("");
    setEmail("");

    alert("User added successfully");
  };

  // ✅ DELETE USER (LOCAL STATE ONLY)
  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  // 🔍 FILTER
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Users</h1>

      {/* ADD USER */}
      <div style={{
        background: darkMode ? "#2c2c3e" : "white",
        color: darkMode ? "white" : "black",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px"
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
            cursor: "pointer",
            transition: "0.2s"
          }}
        >
          Add
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          borderRadius: "8px"
        }}
      />

      {/* TABLE */}
      <div style={{
        background: darkMode ? "#2c2c3e" : "white",
        color: darkMode ? "white" : "black",
        padding: "20px",
        borderRadius: "12px"
      }}>
        {filteredUsers.length === 0 ? (
          <p>No users found</p>
        ) : (
          <table width="100%">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => deleteUser(user.id)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        cursor: "pointer"
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}