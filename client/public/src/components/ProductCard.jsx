// client/src/components/ProductCard.jsx

import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        margin: "15px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3>{product.name}</h3>

      <p
        style={{
          color: "#555",
          minHeight: "50px",
        }}
      >
        {product.description}
      </p>

      <h2 style={{ color: "green" }}>₹{product.price}</h2>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "10px",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>

        <Link to={`/product/${product._id}`}>
          <button
            style={{
              padding: "10px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
