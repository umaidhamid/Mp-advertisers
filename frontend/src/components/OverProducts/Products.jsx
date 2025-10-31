import React, { useState, useEffect } from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductCart from "./ProductCart";
// import { useEffect } from "react";
import api from "../../api/axios.js";
const Products = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    // define async function inside
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/product/getproducts");
        console.log("Fetched products:", response.data);
        setProducts(response.data.products || []); // use correct field name from backend
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };

    fetchProducts(); // call it
  }, []);

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
        {Products.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
