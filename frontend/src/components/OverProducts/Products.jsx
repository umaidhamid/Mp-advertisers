import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductCart from "./ProductCart";
import Loader from "../../loader/Loader.jsx";
import api from "../../api/axios.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔍 search
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // 📄 pagination
  const [page, setPage] = useState(1);
  const limit = 12;
  const [totalPages, setTotalPages] = useState(1);

  /* =========================
     🔍 DEBOUNCE SEARCH INPUT
  ========================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // reset page after search stops
    }, 1500); // ⏳ delay

    return () => clearTimeout(timer);
  }, [search]);

  /* =========================
     📦 FETCH PRODUCTS
  ========================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await api.get("/api/product/getproducts", {
          params: {
            page,
            limit,
            search: debouncedSearch, // ✅ use debounced value
          },
          headers: { "Cache-Control": "no-cache" },
        });

        setProducts(response.data.data || []);
        setTotalPages(response.data.pagination.totalPages);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, debouncedSearch]); // 👈 only fires after debounce

  if (loading) return <Loader />;

  return (
    <div className="ProductsScreen">
      {/* 🔥 MAIN CONTENT (GROWS) */}
      <div style={{ flex: 1, width: "100%" }}>
        {/* SEARCH */}
        <div className="top-row">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product name..."
            style={{
              padding: "10px 14px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              fontSize: "16px",
              width: "min(360px, 90vw)",
            }}
          />
        </div>

        {/* HEADING */}
        <div className="Product-heading">
          <h1>Our Products</h1>
          <p>Boosting Brands Beyond Boundaries</p>
        </div>

        {/* EMPTY STATE */}
        {products.length === 0 && (
          <p style={{ opacity: 0.7, marginTop: 8, textAlign: "center" }}>
            No products found for “{search}”.
          </p>
        )}

        {/* PRODUCTS */}
        <div className="Card-main">
          {products.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* 🔥 PAGINATION (ALWAYS AT BOTTOM) */}
      <div
        style={{
          width: "100%",
          marginTop: "auto", // ⭐ THIS IS THE KEY
          padding: "24px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          background: "rgba(0,0,0,0.15)",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{
            padding: "10px 20px",
            borderRadius: "14px",
            fontWeight: 600,
            backgroundColor: page === 1 ? "#d1d5db" : "#7c3aed",
            color: page === 1 ? "#6b7280" : "#fff",
            border: "none",
            cursor: page === 1 ? "not-allowed" : "pointer",
          }}
        >
          ← Prev
        </button>
        <div
          style={{
            padding: "10px 20px",
            borderRadius: "14px",
            background: "#f3f4f6",
            fontWeight: 600,
          }}
        >
          Page <span style={{ color: "#7c3aed" }}>{page}</span> / {totalPages}
        </div>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          style={{
            padding: "10px 20px",
            borderRadius: "14px",
            fontWeight: 600,
            backgroundColor: page === totalPages ? "#d1d5db" : "#7c3aed",
            color: page === totalPages ? "#6b7280" : "#fff",
            border: "none",
            cursor: page === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next →
        </button>{" "}
        <footer className="flex">
          <h2
            className="CopywriteHeading"
            style={{
              // marginTop: "30px",
              padding: "14px 20px",
              width: "100vw",
              textAlign: "center",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#e5e7eb",
              background: "rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(6px)",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              letterSpacing: "0.3px",
              lineHeight: "1.6",
            }}
          >
            © 2025 Created and Developed by{" "}
            <span
              style={{
                color: "#ff66c4",
                fontWeight: 600,
              }}
            >
              Umaid Hamid
            </span>
            . All Rights Reserved.
            <br />
            <span
              style={{
                display: "block",
                marginTop: "6px",
                fontSize: "0.8rem",
                color: "#d1d5db",
              }}
            >
              📍 Aaribagh Stop, B.K Pora, Nowgam, Srinagar, Jammu and Kashmir,
              India - 190015
            </span>
          </h2>
        </footer>
      </div>
    </div>
  );
};

export default Products;
