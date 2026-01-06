import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const getDiscountedPrice = (price, discount = 0) => {
  if (!discount) return price;
  return Math.round(price - (price * discount) / 100);
};

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();

  const finalPrice = getDiscountedPrice(
    product.price,
    product.discount
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      style={{
        position: "relative",
        background: "#ffffff",
        borderRadius: "24px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: "240px",
          overflow: "hidden",
        }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.1)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              background: "#ef4444",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "999px",
            }}
          >
            {product.discount}% OFF
          </div>
        )}

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          className="overlay"
        />
      </div>

      {/* Content */}
      <div style={{ padding: "24px" }}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#111827",
            margin: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#4f46e5",
            }}
          >
            ₹{finalPrice}
          </span>

          {product.discount > 0 && (
            <span
              style={{
                fontSize: "14px",
                color: "#9ca3af",
                textDecoration: "line-through",
              }}
            >
              ₹{product.price}
            </span>
          )}
        </div>

        {/* CTA */}
      <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/products")}
  style={{
    marginTop: "20px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#eef2ff",
    border: "1px solid #c7d2fe",
    padding: "10px 16px",
    borderRadius: "999px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
    color: "#4338ca",
  }}
>
  View details
  <ArrowRight size={18} />
</motion.button>

      </div>

      {/* Border Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "24px",
          border: "1px solid rgba(79,70,229,0)",
          pointerEvents: "none",
          transition: "border 0.3s ease",
        }}
      />
    </motion.div>
  );
};

export default ProductCard;
