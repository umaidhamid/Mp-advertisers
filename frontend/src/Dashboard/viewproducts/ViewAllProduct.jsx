import React, { useState, useEffect } from "react";
import "../../components/OverProducts/Products.css";
import EditProduct from "./Editproduct.jsx";
import Loader from "../../loader/Loader.jsx";
import api from "../../api/axios.js";

const Viewproduct = () => {
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
     🔍 DEBOUNCE SEARCH
  ========================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // reset page after typing stops
    }, 1500);

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
            search: debouncedSearch, // ✅ backend search
          },
          headers: { "Cache-Control": "no-cache" },
        });

        setProducts(response.data.data || []);
        setTotalPages(response.data.pagination.totalPages);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, debouncedSearch]);

  if (loading) return <Loader />;

  return (
    <div className="ProductsScreen">
      {/* SEARCH */}
      <div className="top-row">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product to edit..."
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
        <h1>Change details</h1>
        <p>Boosting Brands Beyond Boundaries</p>
      </div>

      {/* EMPTY STATE */}
      {products.length === 0 && (
        <p style={{ opacity: 0.7, marginTop: 8 }}>
          No products found for “{search}”.
        </p>
      )}

      {/* PRODUCTS */}
      <div className="Card-main">
        {products.map((product) => (
          <EditProduct key={product._id} product={product} />
        ))}
      </div>

      {/* PAGINATION */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {/* PREV */}
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

        {/* PAGE INFO */}
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

        {/* NEXT */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          style={{
            padding: "10px 20px",
            borderRadius: "14px",
            fontWeight: 600,
            backgroundColor:
              page === totalPages ? "#d1d5db" : "#7c3aed",
            color: page === totalPages ? "#6b7280" : "#fff",
            border: "none",
            cursor:
              page === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Viewproduct;
