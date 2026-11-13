import { useState } from "react";
import LoginPage from "./components/LoginPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <h1>Welcome to the dashboard</h1>
  ) : (
    <LoginPage setIsLoggedIn={setIsLoggedIn} />
  );
}