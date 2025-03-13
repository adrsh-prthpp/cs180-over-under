"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "Failed to login");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.user));
    router.push("/bets");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-green-500 p-2 rounded">Login</button>
        <p className="mt-4 text-center">
          No account? <a href="/signup" className="text-blue-400">Sign up</a>
        </p>
      </form>
    </div>
  );
}
