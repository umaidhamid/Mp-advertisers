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
  const [productdiscount, setproductdiscount] = useState(
    product?.discount || ""
  );
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(product?.imageUrl || "");
  const [finalprice, setFinalprice] = useState(product?.finalprice || "");

  // 🧮 Auto-calculate final price whenever price or discount changes
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

  // 🖼 Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file)); // temporary preview
    }
  };

  // 🔄 PRODUCT UPDATE HANDLER
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      toast.info("Updating product...");

      let newImageUrl = imageUrl;

      // Upload new image if selected
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

      // Send update request to backend
      const response = await api.put("/api/product/updateProduct", {
        productid: product._id,
        name: productname.trim(),
        price: Number(productrate),
        unit: productunit,
        discount: Number(productdiscount),
        finalprice: Number(finalprice),
        imageUrl: newImageUrl,
        description: description,
      });

      if (
        response.status === 200 &&
        response.data.message?.includes("updated")
      ) {
        toast.success(
          response.data.message || "✅ Product updated successfully!"
        );
        setEdit(false);
      } else {
        toast.error("❌ Failed to update product!");
      }
    } catch (error) {
      console.error("❌ Error updating product:", error);
      toast.error("Server error while updating product!");
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Update Product</h1>
      <form
        onSubmit={handleUpdate}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <input
          type="text"
          placeholder="Product Name"
          value={productname}
          onChange={(e) => setproductname(e.target.value)}
        />

        <input
          type="number"
          placeholder="Rate"
          value={productrate}
          onChange={(e) => handleRateChange(e.target.value)}
        />

        <input
          type="text"
          placeholder="Unit"
          value={productunit}
          onChange={(e) => setproductunit(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description "
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Discount %"
          value={productdiscount}
          onChange={(e) => handleDiscountChange(e.target.value)}
        />

        <input
          type="text"
          placeholder="Final Price"
          value={finalprice}
          readOnly
          style={{ background: "#f3f3f3" }}
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            style={{ width: "100px", borderRadius: "10px", marginTop: "5px" }}
          />
        )}

        <button type="submit" style={{ padding: "8px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </main>
  );
};

export default EditProduct;
