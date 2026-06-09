import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === "admin123") {
      localStorage.setItem("admin_auth", "true");
      navigate("/admin");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}