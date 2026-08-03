// client/src/pages/Cart.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    updateCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    updateCart(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>Your cart is empty.</h2>
          <Link to="/">
            <button
              style={{
                padding: "10px 20px",
                marginTop: "15px",
              }}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeFromCart={removeFromCart}
            />
          ))}

          <div
            style={{
              marginTop: "30px",
              textAlign: "right",
            }}
          >
            <h2>Total: ₹{totalPrice}</h2>

            <Link to="/checkout">
              <button
                style={{
                  background: "#28a745",
                  color: "#fff",
                  border: "none",
                  padding: "12px 25px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
