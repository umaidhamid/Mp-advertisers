import React from "react";
import styles from "./LoginPage.module.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>
          <span className={styles.bold}>Admin</span> Panel
        </h2>

        <form className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              placeholder="Username"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.infoBox}>
            <p>👋 Welcome back, Admin.</p>
            <p>🔒 Manage your dashboard securely.</p>
            <p>⚙️ Enter your credentials to continue.</p>
          </div>
          <button type="submit" className={styles.loginBtn}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
