import React, { useState, useContext } from "react";
import styles from "./LoginPage.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import api from "../../api/axios.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.success("✅ Login successful!", { position: "bottom-right" });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      console.error("❌ Login Error:", err);
      toast.error("❌ Invalid username or password!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h2 className={styles.loginTitle}>
            <span className={styles.bold}>Admin</span> Panel
          </h2>

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

            <button type="submit" className={styles.loginBtn}>
              LOGIN
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Toast container at bottom-right */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
      />
    </>
  );
};

export default LoginPage;
