import React, { useState, useEffect, useMemo } from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductCart from "./ProductCart";
import Loader from "../../loader/Loader.jsx";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios.js";

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // ✅ search text
  const navigate = useNavigate();

  // small loading delay (you already had this)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // fetch products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/product/getproducts");
        setProducts(response.data?.products || []);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // ✅ filter only by product name (title)
const filteredProducts = useMemo(() => {
  const q = search.trim().toLowerCase(); // ✅ normalize input
  if (!q) return Products; // ✅ show all if empty search

  return Products.filter((p) => {
    const name = String(p.name || "").toLowerCase(); // ✅ normalize product name
    return name.includes(q); // ✅ case-insensitive match
  });
}, [Products, search]);
  if (loading) return <Loader />;

  return (
    <div className="ProductsScreen">
      <h1 id="backbtn" onClick={() => navigate("/Home")}>
        back
      </h1>

      <div className="top-row">
        {/* <h1 className="cartLogo">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </h1> */}

        {/* ✅ Search by product name only */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by product name..."
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            // background: "transparent",
            fontSize: "16px",
            color: "inherit",
            // width: "min(360px, 80vw)",
          }}
        />
      </div>

      <div className="Product-heading">
        <h1>Our Products</h1>
        <p>Boosting Brands Beyond Boundaries</p>
      </div>

      {filteredProducts.length === 0 && (
        <p style={{ opacity: 0.7, marginTop: 8 }}>
          No products found for “{search}”.
        </p>
      )}

      <div className="Card-main">
        {filteredProducts.map((product) => (
          <ProductCart key={product._id || product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
