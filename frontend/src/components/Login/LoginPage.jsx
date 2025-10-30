import React from "react";
import styles from "./LoginPage.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import api from "../../api/axios.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const LoginPage = () => {
  const [PopUp, setPopUp] = useState("");
  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  console.log(userName, Password);
  const Loginhandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://mp-advertisers.onrender.com/api/owners/loginOwner",
        {
          userName,
          Password,
        },
        { withCredentials: true }
      )
      .then((result) => {
        toast.success("Login successful!");
        console.log(result);
      })
      .catch((err) => {
        toast.error("Invalid credentials!");
        console.log(err);
      });
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
