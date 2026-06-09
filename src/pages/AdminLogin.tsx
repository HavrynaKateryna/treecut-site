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
      const session = {
        auth: true,
        expires: Date.now() + 1000 * 60 * 60 * 24, // 24h
      };

      localStorage.setItem("admin_auth", JSON.stringify(session));

      navigate("/admin");
    } else {
      setError("Wrong password");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h2>Admin Login</h2>
        <p>Enter password to continue</p>

        <form className="admin-login-form" onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <span className="error-text">{error}</span>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}