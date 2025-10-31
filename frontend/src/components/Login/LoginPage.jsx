import React, { useState, useContext } from "react";
import styles from "./LoginPage.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import api from "../../api/axios.js";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const Loginhandler = async (e) => {
    e.preventDefault();

    try {
      const result = await api.post("/api/owners/loginOwner", {
        userName,
        Password,
      });

      console.log("✅ Login Response:", result.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Login Error:", err);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>
          <span className={styles.bold}>Admin</span> Panel
        </h2>

        {/* ✅ Attach handler to the form */}
        <form className={styles.loginForm} onSubmit={Loginhandler}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setuserName(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.infoBox}>
            <p>👋 Welcome back, Admin.</p>
            <p>🔒 Manage your dashboard securely.</p>
            <p>⚙️ Enter your credentials to continue.</p>
          </div>

          {/* ✅ Only submit — no click handler */}
          <button type="submit" className={styles.loginBtn}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
