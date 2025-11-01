import React, { useState } from "react";
import "../../components/OverProducts/Products.css";
import EditForm from "../../components/Edit/Editproduct";
import api from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditProduct = ({ product }) => {
  const [edit, setEdit] = useState(false);
  const deletehandle = async () => {
    try {
      const res = await api.delete(`/api/product/deleteproduct/${product._id}`);

      if (res.status === 200) {
        console.log("✅ Product deleted successfully");
        toast.success(res.data.message || "Product deleted successfully!");
      } else {
        toast.error("❌ Failed to delete product!");
      }
    } catch (error) {
      console.error("❌ Error deleting product:", error);
      toast.error("Server error while deleting product!");
    }
  };
  return (
    <>
      <div className="oneCard">
        <ToastContainer
          // position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <img src={product.imageUrl} alt="Product" />
        <h1 className="Product-name">{product.name}</h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "8px",
          }}
        >
          <h3
            style={{
              textDecoration: "line-through",
              color: "#888",
              fontSize: "16px",
              margin: 0,
            }}
          >
            ₹{product.price}
          </h3>

          <h3
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "16px",
              margin: 0,
            }}
          >
            {product.discount}% OFF
          </h3>

          <h3
            style={{
              color: "green",
              fontWeight: "bold",
              fontSize: "30px",
              margin: 0,
            }}
          >
            ₹{product.finalprice}
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            width: "100%",
            padding: "15px 0",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <button
            style={{
              padding: "9px 26px",
              fontSize: "18px",
              backgroundColor: "#007bff",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "30px",
              border: "none",
              boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => setEdit(true)}
          >
            ✏️
          </button>

          <button
            style={{
              padding: "9px 26px",
              fontSize: "18px",
              backgroundColor: "#dc3545",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "30px",
              border: "none",
              boxShadow: "0px 4px 10px rgba(220, 53, 69, 0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={deletehandle}
          >
            🗑️
          </button>
        </div>
      </div>

      {/* 🟢 Edit Form Popup */}
      {edit && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "500px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setEdit(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✖️
            </button>

            <EditForm
              setEdit={setEdit}
              product={product}
              closeForm={() => setEdit(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
