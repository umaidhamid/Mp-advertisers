import React from "react";

const UploadProduct = () => {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      padding: "2rem 1rem",
      backgroundColor: "#ffe4ec",
      minHeight: "100vh",
      boxSizing: "border-box",
      fontFamily: '"Poppins", sans-serif',
    },

    uploadSection: {
      width: "100%",
      maxWidth: "600px",
      backgroundColor: "white",
      padding: "1.5rem",
      borderRadius: "12px",
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "2rem",
      boxSizing: "border-box",
    },

    sectionTitle: {
      textAlign: "center",
      fontSize: "1.4rem",
      color: "#333",
      marginBottom: "1rem",
    },

    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      width: "100%",
    },

    input: {
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "1rem",
      outline: "none",
      transition: "border-color 0.3s ease",
    },

    rate: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      gap: "10px",
    },

    imageUploadBox: {
      position: "relative",
    },

    fileInput: {
      opacity: 0,
      position: "absolute",
      height: "48px",
      cursor: "pointer",
    },

    imageLabel: {
      display: "inline-block",
      textAlign: "center",
      padding: "12px",
      border: "2px dashed #ccc",
      borderRadius: "8px",
      backgroundColor: "#fafafa",
      color: "#666",
      fontSize: "0.95rem",
      cursor: "pointer",
      transition: "border-color 0.3s ease, background-color 0.3s ease",
      wordBreak: "break-word",
    },

    uploadBtn: {
      marginTop: "10px",
      backgroundColor: "#ff4081",
      color: "white",
      padding: "12px 16px",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background 0.3s ease",
      width: "100%",
    },

    messageSection: {
      width: "100%",
      maxWidth: "600px",
      backgroundColor: "white",
      padding: "1.5rem",
      borderRadius: "12px",
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
      boxSizing: "border-box",
    },

    messageBox: {
      width: "90%",
      height: "50px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      resize: "none",
      fontSize: "1rem",
      outline: "none",
      marginBottom: "10px",
    },

    updateBtn: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "12px 16px",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background 0.3s ease",
      width: "100%",
    },
  };

  return (
    <main style={styles.main}>
      {/* Product Upload Form */}
      <section style={styles.uploadSection}>
        <h2 style={styles.sectionTitle}>Add New Product</h2>
        <form style={styles.formGroup}>
          <input type="text" style={styles.input} placeholder="Product Name" />

          <div style={styles.rate}>
            <input
              type="number"
              style={styles.input}
              placeholder="Product Rate"
            />
            <input
              type="text"
              placeholder="by"
              style={styles.input}
              name=""
              id=""
            />
          </div>

          <input
            type="number"
            style={styles.input}
            placeholder="Product Discount (%)"
            min={0}
            max={100}
          />

          <div style={styles.imageUploadBox}>
            <label htmlFor="productImage" style={styles.imageLabel}>
              Take image
            </label>
            <input
              type="file"
              id="productImage"
              accept="image/*"
              style={styles.fileInput}
            />
          </div>

          <button type="submit" style={styles.uploadBtn}>
            Upload
          </button>
        </form>
      </section>

      {/* Message & Offer Section */}
      <section style={styles.messageSection}>
        <h2 style={styles.sectionTitle}>Message / Offer Update</h2>
        <textarea
          style={styles.messageBox}
          placeholder="Write a message or offer update..."
          maxLength={100}
        />
        <button style={styles.updateBtn}>Update Offer</button>
      </section>
    </main>
  );
};

export default UploadProduct;
