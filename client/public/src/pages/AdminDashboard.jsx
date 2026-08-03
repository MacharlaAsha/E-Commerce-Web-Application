// client/src/pages/AdminDashboard.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    users: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(res.data);
    } catch (error) {
      console.log(error);
      alert("Unable to load dashboard.");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <h1>Admin Dashboard</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              width: "220px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,.2)",
            }}
          >
            <h2>{stats.products}</h2>
            <p>Total Products</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              width: "220px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,.2)",
            }}
          >
            <h2>{stats.orders}</h2>
            <p>Total Orders</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              width: "220px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,.2)",
            }}
          >
            <h2>{stats.users}</h2>
            <p>Total Users</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link to="/admin/add-product">
            <button
              style={{
                padding: "12px 20px",
                background: "#28a745",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Add Product
            </button>
          </Link>

          <Link to="/admin/products">
            <button
              style={{
                padding: "12px 20px",
                background: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Manage Products
            </button>
          </Link>

          <Link to="/admin/orders">
            <button
              style={{
                padding: "12px 20px",
                background: "#6c757d",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Manage Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
