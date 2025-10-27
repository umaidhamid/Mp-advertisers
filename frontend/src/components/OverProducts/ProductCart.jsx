import React from "react";
import "./Products.css";
import Logo from "../../assets/Logo.png";
const ProductCart = () => {
  return (
    <div className="oneCard">
      <img src={Logo} alt="Products" />
      <h1 className="Product-name">Outdoor Flex Banner</h1>
      <h1 className="product-price">₹1234 per sq.ft</h1>
      <button className="cart">Add to Cart</button>
    </div>
  );
};

export default ProductCart;
