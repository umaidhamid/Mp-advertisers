// src/context/authContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const AuthContext = createContext();

// Create the provider
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  // Check authentication from server cookie
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/owners/checkAuth", {
        withCredentials: true,
      })
      .then((res) => {
        setIsAuth(res.data.isAuthenticated); // Example: backend should return { isAuthenticated: true/false }
      })
      .catch(() => {
        setIsAuth(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
