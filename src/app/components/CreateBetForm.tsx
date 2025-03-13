"use client";
import { useState, useEffect } from "react";

export default function CreateBetForm() {
  const [userId, setUserId] = useState<string | null>(null);
  const [betQuestion, setBetQuestion] = useState("");
  const [expiryTime, setExpiryTime] = useState("");

  useEffect(() => {
    // Retrieve userId from localStorage
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  async function handleCreateBet() {
    if (!userId) {
      alert("You must be logged in to create a bet.");
      return;
    }

    const res = await fetch("/api/bets/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        creatorId: userId,
        question: betQuestion,
        expiry: expiryTime ? parseInt(expiryTime) : null,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(`Failed to create bet: ${data.error}`);
    } else {
      alert("Bet created successfully!");
    }
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Create a New Bet</h2>

      <label className="block font-semibold text-white mb-2">Bet Question</label>
      <input
        type="text"
        value={betQuestion}
        onChange={(e) => setBetQuestion(e.target.value)}
        placeholder="Enter bet question..."
        className="w-full p-2 border rounded-md text-black"
      />

      <label className="block font-semibold text-white mt-4 mb-2">
        Expiration Time (Optional, seconds)
      </label>
      <input
        type="number"
        value={expiryTime}
        onChange={(e) => setExpiryTime(e.target.value)}
        placeholder="Enter time in seconds"
        className="w-full p-2 border rounded-md text-black"
      />

      <button
        onClick={handleCreateBet}
        className="w-full mt-6 bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold px-6 py-3 rounded-md"
      >
        Create Bet
      </button>
    </div>
  );
}
