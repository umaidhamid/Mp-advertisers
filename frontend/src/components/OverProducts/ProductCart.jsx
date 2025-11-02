import React, { useState } from "react";
import "./Products.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
const ProductCart = ({ product }) => {
  const [dis, setdis] = useState(false);
  return (
    <div className="oneCard">
      <img src={product.imageUrl} alt="Products" className="imagepreview" />
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
        <h1 className="Product-unit">{product.unit}</h1>
      </div>
      {dis && <p>{product.description}</p>}
      <div style={{ display: "flex ", width: "100%", gap: "10px" }}>
        <p className="discription" onClick={() => setdis(!dis)}>
          discription
        </p>

        <button className="cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCart;
