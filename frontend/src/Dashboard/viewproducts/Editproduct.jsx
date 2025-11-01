import React from "react";
import "../../components/OverProducts/Products.css";
const EditProduct = ({ product }) => {
  return (
    <div className="oneCard">
      <img src={product.imageUrl} alt="Products" />
      <h1 className="Product-name">{product.name}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "8px",
        }}
      >
        {/* Original Price */}
        <h3
          style={{
            textDecoration: "line-through",
            color: "#888",
            fontSize: "16px",
            margin: 0,
          }}
        >
          ₹{product.price}
        </h3>

        {/* Discount */}
        <h3
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "16px",
            margin: 0,
          }}
        >
          {product.discount}% OFF
        </h3>

        {/* Final Price */}
        <h3
          style={{
            color: "green",
            fontWeight: "bold",
            fontSize: "30px",
            margin: 0,
          }}
        >
          ₹{product.finalprice}
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
          padding: "15px 0",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <button
          style={{
            padding: "9px 26px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "30px",
            border: "none",
            boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.3)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
        >
          ✏️
        </button>

        <button
          style={{
            padding: "9px 26px",
            fontSize: "18px",
            backgroundColor: "#dc3545",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "30px",
            border: "none",
            boxShadow: "0px 4px 10px rgba(220, 53, 69, 0.3)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#b02a37")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#dc3545")
          }
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
