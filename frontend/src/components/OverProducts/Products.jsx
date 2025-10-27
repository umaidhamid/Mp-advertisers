import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductCart from "./ProductCart";
const Products = () => {
  return (
    <div className="ProductsScreen">
      <h1 className="cartLogo">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </h1>
      <div className="Product-heading ">
        <h1>Over Products</h1>
        <p>Boosting Brands Beyond Boundaries</p>
      </div>
      <div className="Card-main">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};

export default Products;
