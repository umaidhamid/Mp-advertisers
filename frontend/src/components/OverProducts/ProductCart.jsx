import React, { useState } from "react";
import "./Products.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
const ProductCart = ({ product }) => {
  const [dis, setdis] = useState(false);
  const [loaded, setloaded] = useState(false);
  function orderhandler() {
    const phoneNumber = "919149455296"; // your WhatsApp number (with country code, no +)
    const message = `Hello, I want to order ${product.name} priced at ₹${product.price}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = url; // opens WhatsApp chat in new tab
  }
  return (
    <div className="oneCard">
      {!loaded && <div className="skeleton-loader"></div>}
      <img
        src={product.imageUrl}
        onLoad={() => setloaded(true)}
        alt="Products"
        className="imagepreview"
        style={{ display: loaded ? "block" : "none" }}
      />
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
      {dis && <p className="product-description">{product.description }bkbkajsdkajsdkasjdnkajsn</p>}
      <div style={{ display: "flex ", width: "100%", gap: "10px" }}>
        <p className="discription" onClick={() => setdis(!dis)}>
          About
        </p>

        <button onClick={orderhandler} className="cart">
          Click To Order
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
