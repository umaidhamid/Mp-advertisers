import React, { useEffect, useState } from "react";

const DiscountPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Trigger popup when user scrolls down a bit
    const observerTarget = document.createElement("div");
    observerTarget.style.position = "absolute";
    observerTarget.style.top = "120vh"; // fires after 1.2 screens
    observerTarget.style.width = "100%";
    observerTarget.style.height = "1px";
    observerTarget.style.opacity = "0";
    document.body.appendChild(observerTarget);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowPopup(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(observerTarget);

    return () => {
      observer.unobserve(observerTarget);
      document.body.removeChild(observerTarget);
    };
  }, []);

  // Auto-hide popup after 6 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            color: "white",
            padding: "18px 25px",
            borderRadius: "16px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            fontSize: "17px",
            fontWeight: "600",
            zIndex: 99999,
            opacity: showPopup ? 1 : 0,
            transform: showPopup
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "all 0.5s ease",
            animation: "fadeInUp 0.6s ease-out",
          }}
        >
          🎉 Big Discount Alert! — 20% OFF Today Only 🔥
          <style>
            {`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          </style>
        </div>
      )}
    </>
  );
};

export default DiscountPopup;
