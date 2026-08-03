// client/src/components/AdminSidebar.jsx

import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
    },
    {
      name: "Products",
      path: "/admin/products",
    },
    {
      name: "Add Product",
      path: "/admin/add-product",
    },
    {
      name: "Orders",
      path: "/admin/orders",
    },
    {
      name: "Users",
      path: "/admin/users",
    },
  ];

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#1f2937",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Admin Panel
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {menuItems.map((item) => (
          <li key={item.path} style={{ marginBottom: "15px" }}>
            <Link
              to={item.path}
              style={{
                display: "block",
                padding: "12px",
                textDecoration: "none",
                borderRadius: "6px",
                color: "#fff",
                backgroundColor:
                  location.pathname === item.path ? "#2563eb" : "transparent",
                transition: "0.3s",
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
