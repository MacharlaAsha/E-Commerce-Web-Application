// client/src/pages/Checkout.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [shipping, setShipping] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/orders",
        {
          products: cart,
          shipping,
          totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Order Placed Successfully!");

      localStorage.removeItem("cart");

      navigate("/orders");
    } catch (error) {
      alert(error.response?.data?.message || "Checkout Failed");
    }
  };

  return (
    <div
      style={{
        width: "600px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Checkout</h1>

      <form onSubmit={handleCheckout}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={shipping.fullName}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={shipping.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={shipping.phone}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <textarea
          name="address"
          placeholder="Address"
          value={shipping.address}
          onChange={handleChange}
          required
          rows="3"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={shipping.city}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={shipping.state}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={shipping.pincode}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
        />

        <h2>Total Amount: ₹{totalPrice}</h2>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
