"use client";
import { useState } from "react";

export default function CreateBetForm() {
  const [betName, setBetName] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [selectedSide, setSelectedSide] = useState<"over" | "under" | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user || !user.id) {
      alert("You must be logged in to create a bet.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/bets/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          creatorId: user.id,
          question: betName,
          expiry: expiryTime ? parseInt(expiryTime) : null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create bet");
      }

      alert("Bet created successfully!");
    } catch (error) {
      console.error("Error creating bet:", error);
      alert("Failed to create bet.");
    }

    setLoading(false);
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">Create a New Bet</h2>

      {/* Bet Question Input */}
      <label className="block font-semibold text mb-2">Bet Question</label>
      <input
        type="text"
        value={betName}
        onChange={(e) => setBetName(e.target.value)}
        placeholder="Enter bet question..."
        className="w-full p-2 border rounded-md text-black"
      />

      {/* Expiry Time Input */}
      <label className="block font-semibold mt-4 mb-2">Expiration Time (Optional, seconds)</label>
      <input
        type="number"
        value={expiryTime}
        onChange={(e) => setExpiryTime(e.target.value)}
        placeholder="Enter time in seconds"
        className="w-full p-2 border rounded-md text-black"
      />

      {/* Over/Under Selection */}
      <div className="mt-4 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${selectedSide === "over" ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
          onClick={() => setSelectedSide("over")}
        >
          Over
        </button>
        <button
          className={`px-4 py-2 rounded-md ${selectedSide === "under" ? "bg-red-500 text-white" : "bg-gray-300 text-black"}`}
          onClick={() => setSelectedSide("under")}
        >
          Under
        </button>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-6 bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold px-6 py-3 rounded-md"
      >
        {loading ? "Creating..." : "Create Bet"}
      </button>
    </div>
  );
}
