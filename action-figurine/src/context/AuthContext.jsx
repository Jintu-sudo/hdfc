import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "action-figurine-auth";

// Demo credentials (same as your practice project).
// A real app would check these on a server, never in the browser.
const VALID_USERNAME = "user";
const VALID_PASSWORD = "hello";

function loadIsLoggedIn() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(loadIsLoggedIn);

  // keep the login across page refreshes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(isLoggedIn));
    } catch {
      /* storage unavailable – ignore */
    }
  }, [isLoggedIn]);

  // returns true if the credentials were right, false otherwise
  function login(username, password) {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
