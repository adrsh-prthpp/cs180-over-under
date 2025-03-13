"use client";
import { useState, useEffect } from "react";
import BetList from "./BetList";

export default function UserProfile() {
  const [user, setUser] = useState({ name: "John Doe", totalBets: 0, activeBets: [] });
  const [loading, setLoading] = useState(true);

  async function fetchUserBets() {
    setLoading(true);
    try {
      const res = await fetch("/api/user-bets?userId=user-1", { cache: "no-store" });
      const data = await res.json();
      setUser({ ...user, totalBets: data.totalBets, activeBets: data.activeBets });
    } catch (error) {
      console.error("Error fetching user bets:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUserBets();
  }, []);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-4">Profile</h1>
      <p className="text-lg text-center">👤 {user.name}</p>
      <p className="text-center text-gray-400">Total Bets: {user.totalBets}</p>

      <h2 className="text-xl font-bold mt-6">Your Active Bets</h2>
      {loading ? <p>Loading your bets...</p> : <BetList bets={user.activeBets} refreshBets={fetchUserBets} />}
    </div>
  );
}
