"use client";
import { useState } from "react";
import BetList from "./BetList";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    totalBets: 5,
    activeBets: [
      { id: "1", name: "Game 1", overCount: 3, underCount: 2, expiry: 60000 },
      { id: "2", name: "Game 2", overCount: 5, underCount: 1, expiry: 120000 },
    ],
  });

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-4">Profile</h1>
      <p className="text-lg text-center">👤 {user.name}</p>
      <p className="text-center text-gray-400">Total Bets: {user.totalBets}</p>

      <h2 className="text-xl font-bold mt-6">Your Active Bets</h2>
      <BetList bets={user.activeBets} />
    </div>
  );
}
