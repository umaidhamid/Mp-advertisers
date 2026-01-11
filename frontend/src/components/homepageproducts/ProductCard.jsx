import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const getDiscountedPrice = (price, discount = 0) => {
  if (!discount) return price;
  return Math.round(price - (price * discount) / 100);
};

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();
  const finalPrice = getDiscountedPrice(product.price, product.discount);

  // ✅ WhatsApp Order
  const orderhandler = () => {
    const phoneNumber = "919149455296";
    const message = `Hello, I want to order *${product.name}* priced at ₹${finalPrice}.
${window.location.origin}/review/${product._id}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // ✅ Copy Product Link
  const copyLinkHandler = () => {
    const link = `${window.location.origin}/review/${product._id}`;
    navigator.clipboard.writeText(link);
    toast("Product link copied", {
      description: "You can now share it with anyone",
      duration: 2000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      style={{
        background: "#fff",
        borderRadius: "24px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      {/* IMAGE */}
      <div style={{ height: "240px", overflow: "hidden" }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          onClick={() => navigate(`/review/${product._id}`)} // ✅ THIS LINE
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ padding: "24px" }}>
        <h3 onClick={() => navigate(`/review/${product._id}`)}>
          {product.name}
        </h3>

        <div
          style={{ marginTop: "10px" }}
          onClick={() => navigate(`/review/${product._id}`)}
        >
          <strong style={{ color: "#4f46e5", fontSize: "18px" }}>
            ₹{finalPrice}
          </strong>
          {product.discount > 0 && (
            <span
              style={{ marginLeft: "10px", textDecoration: "line-through" }}
            >
              ₹{product.price}
            </span>
          )}
        </div>

        {/* <p style={{ marginTop: "8px", color: "#6b7280" }}>
          {product.description}
        </p> */}

        {/* BUTTONS */}
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            onClick={() => navigate(`/review/${product._id}`)}
            style={buttonStyle("#eef2ff", "#4338ca")}
          >
            View Details <ArrowRight size={16} />
          </button>

          <button
            onClick={copyLinkHandler}
            style={buttonStyle("#0ea5e9", "#fff")}
          >
            <Copy size={16} /> Copy Link
          </button>

          <button onClick={orderhandler} style={buttonStyle("#22c55e", "#fff")}>
            Order
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const buttonStyle = (bg, color) => ({
  flex: 1,
  background: bg,
  color,
  border: "none",
  padding: "10px",
  borderRadius: "999px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
});

export default ProductCard;
