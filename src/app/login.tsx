"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js navigation
import { apiFetch } from "@/lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Use Next.js router

  async function handleLogin() {
    setError("");

    try {
      const response = await apiFetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fix missing headers
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push("/bets"); // Use Next.js router for navigation
      } else {
        throw new Error("Missing token");
      }
    } catch (error) {
      setError(error.message || "Login failed");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
