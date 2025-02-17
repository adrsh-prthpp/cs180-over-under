"use client"; 

import { useState } from "react";

export default function BetForm() {
  const [selectedBet, setSelectedBet] = useState("");
  const [betSide, setBetSide] = useState<"over" | "under" | null>(null);

  const availableBets = [
    { id: "bet1", name: "Game 1" },
    { id: "bet2", name: "Game 2" },
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center">Place a Bet</h3>

      <label className="block mb-2 font-medium">Select a Bet:</label>
      <select
        className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:ring focus:ring-blue-300"
        value={selectedBet}
        onChange={(e) => setSelectedBet(e.target.value)}
      >
        <option value="">-- Choose a Bet --</option>
        {availableBets.map((bet) => (
          <option key={bet.id} value={bet.id}>
            {bet.name}
          </option>
        ))}
      </select>

      <div className="flex justify-between mt-4">
        <button
          className={`w-1/2 px-4 py-2 font-semibold rounded-l-lg transition-all ${
            betSide === "over"
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-green-400"
          }`}
          onClick={() => setBetSide("over")}
        >
          Over
        </button>
        <button
          className={`w-1/2 px-4 py-2 font-semibold rounded-r-lg transition-all ${
            betSide === "under"
              ? "bg-red-500 text-white"
              : "bg-gray-200 hover:bg-red-400"
          }`}
          onClick={() => setBetSide("under")}
        >
          Under
        </button>
      </div>

      <button
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg font-semibold transition hover:bg-blue-600 disabled:bg-gray-300"
        disabled={!selectedBet || !betSide}
      >
        Place Bet
      </button>
    </div>
  );
}
