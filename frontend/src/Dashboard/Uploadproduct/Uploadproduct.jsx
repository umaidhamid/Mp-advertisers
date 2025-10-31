import React, { useState } from "react";
import axios from "axios";
import api from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    },
    rate: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      gap: "10px",
    },
    imageUploadBox: { position: "relative" },
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
      width: "100%",
    },
    messageSection: {
      width: "100%",
      maxWidth: "600px",
      backgroundColor: "white",
      padding: "1.5rem",
      borderRadius: "12px",
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
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
      width: "100%",
    },
  };

  const [productname, setproductname] = useState("");
  const [productrate, setproductrate] = useState("");
  const [productunit, setproductunit] = useState("");
  const [productdiscount, setproductdiscount] = useState("");
  const [image, setImage] = useState(null);
  const [discountmsg, setdiscountmsg] = useState("");

  // 🟢 Handle image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // 🟢 PRODUCT UPLOAD HANDLER
  const FormHandler = async (e) => {
    e.preventDefault();

    try {
      if (!image) return toast.warn("⚠️ Please upload an image!");

      toast.info("Uploading image, please wait...");

      // Step 1️⃣: Get Cloudinary signature
      const { data } = await api.get("/api/cloudinary/get-signature");

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

      // Step 3️⃣: Upload product to your API
      const response = await api.post("/api/product/createProduct", {
        name: productname,
        price: Number(productrate),
        unit: productunit,
        discount: Number(productdiscount),
        imageUrl: imageUrl,
      });

      if (response.data.success) {
        toast.success("✅ Product uploaded successfully!");
      } else {
        toast.error("❌ Failed to upload product!");
      }

      // 🧹 Clear form fields
      setproductname("");
      setproductrate("");
      setproductunit("");
      setproductdiscount("");
      setImage(null);
    } catch (error) {
      console.error("❌ Error creating product:", error);
      toast.error("Server error while uploading product!");
    }
  };

  // 🟢 MESSAGE UPLOAD HANDLER
  const msgHandler = async (e) => {
    e.preventDefault();

    try {
      if (!discountmsg.trim()) {
        toast.warn("⚠️ Please enter a message before uploading!");
        return;
      }

      const response = await api.post("/api/product/uploadmsg", {
        uploadmessage: discountmsg,
      });

      if (response.data.success) {
        toast.success("✅ Message uploaded successfully!");
        setdiscountmsg("");
      } else {
        toast.error("❌ Failed to upload message!");
      }
    } catch (error) {
      console.error("❌ Error uploading message:", error);
      toast.error("Server error while uploading message!");
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
            value={productname}
            onChange={(e) => setproductname(e.target.value)}
            placeholder="Product Name"
          />
          <div style={styles.rate}>
            <input
              type="number"
              style={styles.input}
              placeholder="Product Rate"
              value={productrate}
              onChange={(e) => setproductrate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Units"
              style={styles.input}
              value={productunit}
              onChange={(e) => setproductunit(e.target.value)}
            />
          </div>

          <input
            type="number"
            style={styles.input}
            placeholder="Product Discount (%)"
            min={0}
            max={100}
            value={productdiscount}
            onChange={(e) => setproductdiscount(e.target.value)}
          />

          <div style={styles.imageUploadBox}>
            <label
              htmlFor="productImage"
              style={{
                ...styles.imageLabel,
                borderColor: image ? "#007bff" : "#ccc", // change border color to blue
                backgroundColor: image ? "#e6f0ff" : "#fafafa", // light blue background
                color: image ? "#007bff" : "#666", // text color blue
                fontWeight: image ? "600" : "normal",
              }}
            >
              {image ? `✅ ${image.name}` : "Choose Image"}
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
            Upload Product
          </button>
        </form>
      </section>

      {/* Message Section */}
      <section style={styles.messageSection}>
        <h2 style={styles.sectionTitle}>Message / Offer Update</h2>
        <textarea
          style={styles.messageBox}
          placeholder="Write a message or offer update..."
          maxLength={100}
          value={discountmsg}
          onChange={(e) => setdiscountmsg(e.target.value)}
        />
        <button style={styles.updateBtn} onClick={msgHandler}>
          Update Offer
        </button>
      </section>

      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </main>
  );
};

export default UploadProduct;
