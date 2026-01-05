import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BubbleMenu = ({
  logo,
  items,
  menuAriaLabel = "Toggle navigation",
  menuBg = "#ffffff",
  menuContentColor = "#111111",
  useFixedPosition = true,
  animationEase = "back.out(1.4)",
  animationDuration = 0.35,
  staggerDelay = 0.08,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: useFixedPosition ? "fixed" : "relative",
        top: 0,
        right: 0,
        zIndex: 99999,
      }}
    >
      {/* Toggle Button */}
      <button
        aria-label={menuAriaLabel}
        onClick={() => setOpen((p) => !p)}
        style={{
          width: 58,
          height: 60,

          backgroundColor: "transparent",       
          color: menuContentColor,
          border: "none",
          fontSize: 26,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        {logo}
      </button>

      {/* Menu Items (TOP ➜ BOTTOM) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: animationDuration, ease: animationEase }}
            style={{
              position: "absolute",
              top: 70, // ⬅ opens BELOW button
              right: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              minWidth: 160,
            }}
          >
            {items.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                aria-label={item.ariaLabel}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  delay: i * staggerDelay,
                  duration: animationDuration,
                }}
                onClick={() => setOpen(false)}
                style={{
                  padding: "14px 18px",
                  borderRadius: 999,
                  background: menuBg,
                  color: menuContentColor,
                  fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = item.hoverStyles.bgColor;
                  e.currentTarget.style.color = item.hoverStyles.textColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = menuBg;
                  e.currentTarget.style.color = menuContentColor;
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BubbleMenu;
