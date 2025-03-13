"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateBetForm() {
  const [betName, setBetName] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("You must be logged in to create a bet.");
      router.push("/login");
    } else {
      setUserId(JSON.parse(storedUser).id);
    }
  }, []);

  async function handleSubmit() {
    if (!userId) return;
    const res = await fetch("/api/bets/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: betName, expiry: expiryTime, creatorId: userId }),
    });

    if (!res.ok) {
      alert("Failed to create bet.");
    } else {
      alert("Bet created successfully!");
      setBetName("");
      setExpiryTime("");
    }
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">Create a New Bet</h2>
      <input
        type="text"
        placeholder="Bet Question"
        className="w-full p-2 mb-2 rounded"
        value={betName}
        onChange={(e) => setBetName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expiration Time (seconds)"
        className="w-full p-2 mb-4 rounded"
        value={expiryTime}
        onChange={(e) => setExpiryTime(e.target.value)}
      />
      <button onClick={handleSubmit} className="w-full bg-blue-500 p-2 rounded">Create Bet</button>
    </div>
  );
}
