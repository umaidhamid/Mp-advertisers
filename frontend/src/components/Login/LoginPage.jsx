import React from "react";
import styles from "./LoginPage.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import api from "../../api/axios.js";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.jsx";
import { useContext } from "react";
const LoginPage = () => {
  const [PopUp, setPopUp] = useState("");
  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(userName, Password);
  const Loginhandler = async (e) => {
    e.preventDefault();

    try {
      const result = await api.post("/api/owners/loginOwner", {
        userName,
        Password,
      });

      toast.success("Login successful!");
      setIsAuth(true);
      console.log("✅ Login Response:", result.data);

      // redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Login Error:", err);
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <ToastContainer position="top-center" autoClose={2000} />
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
              onChange={(e) => {
                setuserName(e.target.value);
              }}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={styles.input}
            />
          </div>
          <div className={styles.infoBox}>
            <p>👋 Welcome back, Admin.</p>
            <p>🔒 Manage your dashboard securely.</p>
            <p>⚙️ Enter your credentials to continue.</p>
          </div>
          <button
            onClick={Loginhandler}
            type="submit"
            className={styles.loginBtn}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
