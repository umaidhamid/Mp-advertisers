import React from "react";
import styles from "./Dashboard.module.css";
import Uploadproduct from "./Uploadproduct/Uploadproduct.jsx";
import ViewAllProduct from "./viewproducts/ViewAllProduct.jsx";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      {/* .selectedTab */} 
      <header className={styles.header}>
        <h1 className={styles.uploadTitle}>Upload Product</h1> <h1>|</h1>
        <h1 className={styles.allProductsTitle}>All Products</h1>
      </header>
     
        <Uploadproduct />
   

    </div>
  );
};

export default Dashboard;
