"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "Failed to sign up");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.user));
    router.push("/bets");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignup} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-2 rounded text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className="w-full bg-blue-500 p-2 rounded">Sign Up</button>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-400">Login</a>
        </p>
      </form>
    </div>
  );
}
