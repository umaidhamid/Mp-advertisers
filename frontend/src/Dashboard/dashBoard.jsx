import React from "react";
import Uploadproduct from "./Uploadproduct/Uploadproduct.jsx";
import ViewAllProduct from "./viewproducts/ViewAllProduct.jsx";

const Dashboard = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(240, 248, 255, 0.812)",
      fontFamily: '"Poppins", sans-serif',
      minHeight: "100vh",
    },

    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      fontSize: "0.6rem",
      // flexWrap: "wrap",
      // padding: "30px 0",
      // backgroundColor: "#ffe4ec",
    },

    uploadTitle: {
      backgroundColor: "#ff4081",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },

    allProductsTitle: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },

    separator: {
      margin: "0 8px",
      color: "#555",
    },

    // ✅ Responsive tweaks
    "@media (max-width: 900px)": {
      header: { fontSize: "0.7rem" },
      uploadTitle:{fontFamily:"0.5rem"}
    },
    "@media (max-width: 380px)": {
      header: { fontSize: "0.2rem" },uploadTitle:{fontFamily:"0.5rem"}
      
    },
    "@media (max-width: 380px)": {
      header: { fontSize: "0.4rem" },
      uploadTitle:{fontFamily:"0.5rem"}
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.uploadTitle}>Upload Product</h1>
        <h1 style={styles.separator}>|</h1>
        <h1 style={styles.allProductsTitle}>All Products</h1>
      </header>

      <Uploadproduct />
    </div>
  );
};

export default Dashboard;
