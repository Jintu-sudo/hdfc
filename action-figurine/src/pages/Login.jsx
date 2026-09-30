import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

export default function Login() {
  const { isLoggedIn, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // already logged in? skip the login page
  if (isLoggedIn) return <Navigate to="/dashboard" replace />;

  function handleSubmit(e) {
    e.preventDefault();
    // on success, isLoggedIn becomes true and the <Navigate> above
    // sends the user to the dashboard automatically
    if (!login(username, password)) {
      setErrorMessage("Wrong Credentials");
    }
  }

  return (
    <div className="login-page">
      <div className="login">
        <Link to="/dashboard" className="login-brand">Action-Figurine</Link>
        <h1>Welcome Back</h1>
        <p className="login-subtext">Log in to continue shopping</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Email / Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your email or username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrorMessage("");
            }}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage("");
            }}
          />

          <button type="submit" className="login-btn">Log In</button>

          {errorMessage && <p className="login-error">{errorMessage}</p>}
        </form>

        <p className="login-footer-text">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
