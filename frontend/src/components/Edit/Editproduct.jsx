import React, { useState } from "react";
import axios from "axios";
import api from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = ({ product, setEdit }) => {
  const [productname, setproductname] = useState(product?.name || "");
  const [productrate, setproductrate] = useState(product?.price || "");
  const [productunit, setproductunit] = useState(product?.unit || "");
  const [description, setdescription] = useState(product?.description || "");
  const [productdiscount, setproductdiscount] = useState(product?.discount || "");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(product?.imageUrl || "");
  const [finalprice, setFinalprice] = useState(product?.finalprice || "");

  const calculateFinalPrice = (price, discount) => {
    const rateNum = Number(price);
    const discountNum = Number(discount);

    if (!isNaN(rateNum) && !isNaN(discountNum)) {
      const discounted = rateNum - (rateNum * discountNum) / 100;
      setFinalprice(discounted.toFixed(2));
    } else {
      setFinalprice("");
    }
  };

  const handleRateChange = (value) => {
    setproductrate(value);
    calculateFinalPrice(value, productdiscount);
  };

  const handleDiscountChange = (value) => {
    setproductdiscount(value);
    calculateFinalPrice(productrate, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      toast.info("Updating product...");

      let newImageUrl = imageUrl;

      if (image) {
        const { data } = await api.get("/api/cloudinary/get-signature");
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

        newImageUrl = uploadRes.data.secure_url;
      }

      const response = await api.put("/api/product/updateProduct", {
        productid: product._id,
        name: productname.trim(),
        price: Number(productrate),
        unit: productunit,
        discount: Number(productdiscount),
        finalprice: Number(finalprice),
        imageUrl: newImageUrl,
        description,
      });

      if (response.status === 200) {
        toast.success("✅ Product updated successfully!");
        setEdit(false);
      } else {
        toast.error("❌ Failed to update product!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error while updating product!");
    }
  };

  /* 🎨 Inline styles */
  const styles = {
    container: {

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f7fb",
    },
    card: {
      background: "#fff",
      // padding: "25px",
      borderRadius: "12px",
      width: "350px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "15px",
      fontSize: "22px",
      fontWeight: "600",
    },
    input: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "14px",
      outline: "none",
    },
    readOnly: {
      background: "#f0f0f0",
      cursor: "not-allowed",
    },
    button: {
      marginTop: "10px",
      padding: "10px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
    },
    image: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "10px",
      marginTop: "10px",
      border: "1px solid #ddd",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  };

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Update Product</h1>

        <form onSubmit={handleUpdate} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="Product Name"
            value={productname}
            onChange={(e) => setproductname(e.target.value)}
          />

          <input
            style={styles.input}
            type="number"
            placeholder="Rate"
            value={productrate}
            onChange={(e) => handleRateChange(e.target.value)}
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Unit"
            value={productunit}
            onChange={(e) => setproductunit(e.target.value)}
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />

          <input
            style={styles.input}
            type="number"
            placeholder="Discount %"
            value={productdiscount}
            onChange={(e) => handleDiscountChange(e.target.value)}
          />

          <input
            style={{ ...styles.input, ...styles.readOnly }}
            type="text"
            placeholder="Final Price"
            value={finalprice}
            readOnly
          />

          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {imageUrl && <img src={imageUrl} alt="Preview" style={styles.image} />}

          <button type="submit" style={styles.button}>
            Update Product
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </main>
  );
};

export default EditProduct;
