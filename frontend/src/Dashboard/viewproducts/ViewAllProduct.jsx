import React, { useState, useEffect } from "react";
import "../../components/OverProducts/Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import ProductCart from "./ProductCart";
import EditProduct from "./Editproduct.jsx";
import Loader from "../../loader/Loader.jsx";
import api from "../../api/axios.js";
const Viewproduct = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // define async function inside
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/product/getproducts");
        setProducts(response.data.products || []); // use correct field name from backend
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };

    fetchProducts(); // call it
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="ProductsScreen">
      <div className="Product-heading ">
        <h1>Change details</h1>
        <p>Boosting Brands Beyond Boundaries</p>
      </div>
      <div className="Card-main">
        {Products.map((product, index) => (
          <EditProduct key={product._id || index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Viewproduct;
