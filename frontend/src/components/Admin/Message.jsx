import React, { useState } from "react";
import api from "../../api/axios.js";
import { toast, } from "sonner";
import {Toaster} from "sonner";

const Message = () => {
  const [discountmsg, setdiscountmsg] = useState("");
  const [loading, setLoading] = useState(false);

  const msgHandler = async () => {
    if (!discountmsg.trim()) {
      
      toast.error("Please enter a message before uploading!");
      return;
    }

    try {
      setLoading(true);
   
      const response = await api.post("/api/product/uploadmsg", {
        uploadmessage: discountmsg.trim(),
      });
      toast.success(" Message uploaded successfully!");
    } catch (error) {
      console.error(" Error uploading message:", error);
      toast.error("🚨 Server error while uploading message!");
    } finally {
      toast.dismiss();
      setLoading(false);
    }
  };

  return (
    <>
    <div className="message-container admin-message-container bg-gray-100">
      <section style={styles.messageSection}>
        <h2 style={styles.sectionTitle}>Message / Offer Update</h2>

        <textarea
          style={styles.messageBox}
          placeholder="Write a message or offer update..."
          maxLength={100}
          value={discountmsg}
          onChange={(e) => setdiscountmsg(e.target.value)}
        />

        <button
          style={{
            ...styles.updateBtn,
            opacity: loading ? 0.6 : 1,
          }}
          onClick={msgHandler}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Offer"}
        </button>
      </section>
    </div>
    </>
    );
};

export default Message;
const styles = {
  messageSection: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  messageBox: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    resize: "vertical",
  },
  updateBtn: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};