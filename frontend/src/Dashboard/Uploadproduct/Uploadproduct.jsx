import React from "react";
import { useState } from "react";
import axios from "axios";
import api from "../../api/axios";
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
  const [productname, setproductname] = useState("");
  const [productrate, setproductrate] = useState("");
  const [productunit, setproductunit] = useState("");
  const [productdiscount, setproductdiscount] = useState("");
  const [image, setImage] = useState(null);
  const [discountmsg, setdiscountmsg] = useState("");

  const handleImageChange = async (e) => {
    setImage(e.target.files[0]);
  };

  //
  const FormHandler = async (e) => {
    e.preventDefault();

    try {
      if (!image) return alert("Please upload an image!");

      console.log("Form working...");

      // Step 1️⃣: Get Cloudinary signature from backend
      const { data } = await axios.get(
        "http://localhost:5000/api/cloudinary/get-signature"
      );

      // Step 2️⃣: Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", image);
      formData.append("api_key", data.api_key);
      formData.append("timestamp", data.timestamp);
      formData.append("upload_preset", "Mp_Advt");
      formData.append("signature", data.signature);

      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${data.cloud_name}/image/upload`,
        formData
      );

      const imageUrl = uploadRes.data.secure_url;
      console.log("✅ Uploaded image URL:", imageUrl);

      // Step 3️⃣: Send product data to your API
      const response = await api.post("/api/product/createProduct", {
        name: productname,
        price: Number(productrate),
        unit: productunit,
        discount: Number(productdiscount),
        imageUrl: imageUrl, // ✅ Use Cloudinary URL here, not the file
      });

      console.log("✅ Product created:", response.data);
    } catch (error) {
      console.error("❌ Error creating product:", error);
    }
  };
  return (
    <main style={styles.main}>
      {/* Product Upload Form */}
      <section style={styles.uploadSection}>
        <h2 style={styles.sectionTitle}>Add New Product</h2>
        <form style={styles.formGroup} onSubmit={FormHandler}>
          <input
            type="text"
            style={styles.input}
            onChange={(e) => {
              setproductname(e.target.value);
            }}
            placeholder="Product Name"
          />

          <div style={styles.rate}>
            <input
              type="number"
              style={styles.input}
              placeholder="Product Rate"
              onChange={(e) => {
                setproductrate(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Units"
              style={styles.input}
              onChange={(e) => {
                setproductunit(e.target.value);
              }}
            />
          </div>

          <input
            type="number"
            style={styles.input}
            placeholder="Product Discount (%)"
            min={0}
            max={100}
            onChange={(e) => {
              setproductdiscount(e.target.value);
            }}
          />

          <div style={styles.imageUploadBox}>
            <label htmlFor="productImage" style={styles.imageLabel}>
              Take image
            </label>
            <input
              type="file"
              id="productImage"
              accept="image/*"
              onChange={handleImageChange}
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
          onChange={(e) => {
            setdiscountmsg(e.target.value);
          }}
        />
        <button style={styles.updateBtn}>Update Offer</button>
      </section>
    </main>
  );
};

export default UploadProduct;
