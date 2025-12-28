import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ ADD THIS

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/owners/checkAuth", {
        withCredentials: true,
      })
      .then((res) => {
        setIsAuth(res.data.isAuthenticated);
      })
      .catch(() => {
        setIsAuth(false);
      })
      .finally(() => {
        setLoading(false); // ✅ IMPORTANT
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
