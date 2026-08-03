// client/src/components/CartItem.jsx

const CartItem = ({ item, increaseQty, decreaseQty, removeFromCart }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />

        <div>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Subtotal: ₹{item.price * item.quantity}</p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          onClick={() => decreaseQty(item._id)}
          style={{
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQty(item._id)}
          style={{
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeFromCart(item._id)}
        style={{
          background: "red",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
