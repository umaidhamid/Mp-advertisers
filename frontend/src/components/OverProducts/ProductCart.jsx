import React from "react";
import "./Products.css";
import Logo from "../../assets/Logo.png";
const ProductCart = ({ product }) => {
  return (
    <div className="oneCard">
      <img src={product.imageUrl} alt="Products" />
      <h1 className="Product-name">{product.name}r</h1>
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

      <button className="cart">Add to Cart</button>
    </div>
  );
};

export default ProductCart;
