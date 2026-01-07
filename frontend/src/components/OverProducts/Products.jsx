import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "../homepageproducts/ProductCard";
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
      setPage(1);
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
            search: debouncedSearch,
          },
          headers: { "Cache-Control": "no-cache" },
        });
        // console.log(response.data.data);
        setProducts(response.data.data || []);
        setTotalPages(response.data.pagination.totalPages);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, debouncedSearch]);

  if (loading) return <Loader />;

  return (
    <div className="ProductsScreen bg-pink-300">
      {/* MAIN CONTENT */}
      <div className="ProductsContent">
        {/* SEARCH */}
        <div className="top-row flex justify-center ">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="
        w-full
        rounded-xl
        border border-gray-200
        bg-white
        px-4 py-3
        pr-10
        text-sm
        text-gray-900
        shadow-sm
        transition
        placeholder:text-gray-400
        focus:border-violet-500
        focus:ring-2
        focus:ring-violet-200
        focus:outline-none
      "
            />
          </div>
        </div>

        {/* HEADING */}
        <div className="Product-heading">
          <h1>Our Products</h1>
          <p>Boosting Brands Beyond Boundaries</p>
        </div>

        {/* EMPTY STATE */}
        {products.length === 0 && (
          <p className="empty-text">No products found for “{search}”.</p>
        )}

        {/* PRODUCTS GRID */}
        <div className="Card-main">
          {products.map((product, index) => (
            <ProductCard key={product._id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="page-btn"
        >
          ← Prev
        </button>

        <div className="page-info">
          Page <span>{page}</span> / {totalPages}
        </div>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="page-btn"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Products;
