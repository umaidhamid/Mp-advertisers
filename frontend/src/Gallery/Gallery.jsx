import React, { useEffect, useState } from "react";
import InfiniteMenu from "../../animation/InfiniteMenu";
import api from "../api/axios";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await api.get("/api/gallery/get");

        const formattedItems = res.data.data.map((item) => ({
          image: item.image,
        }));

        // 🧠 Preload images before rendering InfiniteMenu
        await preloadImages(formattedItems);

        setItems(formattedItems);
      } catch (error) {
        console.error("Gallery fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // 🔁 Image preloader
  const preloadImages = (items) => {
    return Promise.all(
      items.map(
        (item) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // fail-safe
            img.src = item.image;
          }),
      ),
    );
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {loading && (
        <div style={styles.loaderWrapper}>
          <div style={styles.loader} />
          <p style={styles.loaderText}>Loading gallery…</p>
        </div>
      )}

      {!loading && items.length > 0 && (
        <InfiniteMenu items={items} scale={1.1} />
      )}
    </div>
  );
};

export default Gallery;
const styles = {
  loaderWrapper: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #0f172a, #020617)",
    zIndex: 10,
  },
  loader: {
    width: "46px",
    height: "46px",
    border: "4px solid rgba(255,255,255,0.2)",
    borderTopColor: "#ffffff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loaderText: {
    marginTop: "14px",
    color: "#e5e7eb",
    fontSize: "0.95rem",
    letterSpacing: "0.3px",
  },
};
