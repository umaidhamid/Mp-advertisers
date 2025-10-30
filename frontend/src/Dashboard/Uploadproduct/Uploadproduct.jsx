import React from "react";
import styles from "../dashBoard.module.css";

const UploadProduct = () => {
  return (
    <main className={styles.main}>
      {/* Product Upload Form */}
      <section className={styles.uploadSection}>
        <h2 className={styles.sectionTitle}>Add New Product</h2>
        <form className={styles.formGroup}>
          <input
            type="text"
            className={styles.input}
            placeholder="Product Name"
          />

          <div className={styles.rate}>
      
            <input
              type="number"
              className={styles.input}
              placeholder="Product Rate"
            />
            <input type="text" placeholder="by "  className={styles.input} name="" id="" />
          </div>

          <input
            type="number"
            className={styles.input}
            placeholder="Product Discount (%)"
            min={0}
            max={100}
          />
          <div className={styles.imageUploadBox}>
            <label htmlFor="productImage" className={styles.imageLabel}>
              Take image
              {/* {image ? image.name : "Upload Product Image"} */}
            </label>
            <input
              type="file"
              id="productImage"
              accept="image/*"
              className={styles.fileInput}
              //   onChange={handleImageUpload}
            />
          </div>
          <button type="submit" className={styles.uploadBtn}>
            Upload
          </button>
        </form>
      </section>

      {/* Message & Offer Section */}
      <section className={styles.messageSection}>
        <h2 className={styles.sectionTitle}>Message / Offer Update</h2>
        <textarea
          className={styles.messageBox}
          placeholder="Write a message or offer update..."
          maxLength={100}
        />
        <button className={styles.updateBtn}>Update Offer</button>
      </section>
    </main>
  );
};

export default UploadProduct;
