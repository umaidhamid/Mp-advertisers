import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import api from "../api/axios.js";
import { toast } from "sonner";

/* ---------- Utils ---------- */
const getDiscountedPrice = (price, discount = 0) => {
  if (!discount) return price;
  return Math.round(price - (price * discount) / 100);
};

const ReviewProduct = () => {
  const { reference } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        /* 1️⃣ Fetch main product */
        const { data } = await api.get(`/api/product/review/${reference}`);
        setProduct(data);
        const searchKey = data?.name?.slice(0, 2) || "";

        /* 2️⃣ Fetch other products (limit = 3) */
        const response = await api.get("/api/product/getproducts", {
          params: {
            page: 1,
            limit: 3,
            search: searchKey,
          },
        });

        // ✅ backend-safe access
        const products = Array.isArray(response.data.data)
          ? response.data.data
          : [];

        // remove current product
        const filtered = products.filter((p) => p._id !== reference);

        setOtherProducts(filtered);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reference]);

  if (loading) return <p style={{ padding: 40 }}>Loading...</p>;
  if (!product) return <p style={{ padding: 40 }}>Product not found</p>;

  const finalPrice = getDiscountedPrice(product.price, product.discount);

  /* ---------- Handlers ---------- */
  const copyLinkHandler = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Product link copied", {
        description: "You can now share it with anyone",
        duration: 2000,
      });
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const orderHandler = () => {
    toast("Redirecting to WhatsApp…", { duration: 1500 });

    const phoneNumber = "919149455296";
    const message = `Hello, I want to order *${product.name}* priced at ₹${finalPrice}.
${window.location.href}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <div style={{ padding: 16 }}>
      {/* MAIN PRODUCT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={mainCard}
      >
        {/* IMAGE */}
        <img src={product.imageUrl} alt={product.name} style={mainImage} />

        {/* DETAILS */}
        <div style={details}>
          <h1>{product.name}</h1>

          <div style={{ margin: "16px 0" }}>
            <strong style={{ fontSize: 24, color: "#4f46e5" }}>
              ₹{finalPrice}
            </strong>

            {product.discount > 0 && (
              <span style={oldPrice}>₹{product.price}</span>
            )}
          </div>

          <p style={description}>{product.description}</p>

          <div style={actions}>
            <button onClick={orderHandler} style={btn("#22c55e", "#fff")}>
              Order on WhatsApp
            </button>

            <button onClick={copyLinkHandler} style={btn("#0ea5e9", "#fff")}>
              <Copy size={16} /> Copy Link
            </button>
          </div>
        </div>
      </motion.div>

      {/* OTHER PRODUCTS */}
      {otherProducts.length > 0 && (
        <div style={{ maxWidth: 1100, margin: "60px auto 0" }}>
          <h2 style={{ marginBottom: 20 }}>Similar Products</h2>

          <div style={grid}>
            {otherProducts.map((item) => (
              <motion.div
                key={item._id}
                whileHover={{ y: -6 }}
                style={otherCard}
                onClick={() => navigate(`/review/${item._id}`)}
              >
                <img src={item.imageUrl} alt={item.name} style={otherImage} />

                <div style={{ padding: 14 }}>
                  <h4>{item.name}</h4>
                  <strong style={{ color: "#4f46e5" }}>
                    ₹{getDiscountedPrice(item.price, item.discount)}
                  </strong>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------- Styles ---------- */

const mainCard = {
  maxWidth: "1100px",
  margin: "0 auto",
  background: "#fff",
  borderRadius: 24,
  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
  overflow: "hidden",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
};

const mainImage = {
  width: "100%",
  height: "100%",
  minHeight: 320,
  objectFit: "cover",
};

const details = {
  padding: 32,
};

const description = {
  color: "#6b7280",
  lineHeight: 1.6,
};

const oldPrice = {
  marginLeft: 12,
  textDecoration: "line-through",
  color: "#6b7280",
};

const actions = {
  display: "flex",
  gap: 12,
  marginTop: 30,
  flexWrap: "wrap",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 2fr))",
  gap: 20,
};

const otherCard = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
  overflow: "hidden",
  cursor: "pointer",
};

const otherImage = {
  width: "100%",
  height: 180,
  objectFit: "cover",
};

const btn = (bg, color) => ({
  background: bg,
  color,
  border: "none",
  padding: "12px 20px",
  borderRadius: "999px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 6,
});

export default ReviewProduct;
