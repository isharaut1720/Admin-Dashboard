import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

export default function Orders({ darkMode }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
      // 👉 Fake orders using users (for demo)
      const fakeOrders = res.data.map((user, index) => ({
        id: index + 1,
        name: user.name,
        amount: Math.floor(Math.random() * 1000),
        status: index % 2 === 0 ? "Completed" : "Pending"
      }));

      setOrders(fakeOrders);
    });
  }, []);

  return (
    <div>
      <h1 style={{
        color: darkMode ? "#ffffff" : "#111",
        fontSize: "28px",
        marginBottom: "20px"
      }}>
        Orders
      </h1>

      <div style={{
        background: darkMode ? "#2c2c3e" : "white",
        color: darkMode ? "white" : "black",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <table width="100%">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>ID</th>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>₹{order.amount}</td>
                <td style={{
                  color: order.status === "Completed" ? "green" : "orange"
                }}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}