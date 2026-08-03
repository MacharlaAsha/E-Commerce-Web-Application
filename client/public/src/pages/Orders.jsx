// client/src/pages/Orders.jsx

import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Loading Orders...
      </h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        My Orders
      </h1>

      {orders.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No Orders Found</h3>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Order ID: {order._id}</h3>

            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: "green" }}>
                {order.status}
              </span>
            </p>

            <p>
              <strong>Total:</strong> ₹{order.totalPrice}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleDateString()}
            </p>

            <h4>Products</h4>

            <ul>
              {order.products.map((item, index) => (
                <li key={index}>
                  {item.product?.name || item.name} × {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
