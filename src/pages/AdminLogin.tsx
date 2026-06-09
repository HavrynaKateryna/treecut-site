import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin-login.css";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === "admin123") {
      localStorage.setItem("admin_auth", "true");
      navigate("/admin");
    } else {
      setError("Wrong password");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h2>Admin Panel</h2>
        <p>Enter password to continue</p>

        <form onSubmit={handleLogin} className="admin-login-form">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {error && <span className="error-text">{error}</span>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}