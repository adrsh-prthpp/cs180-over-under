"use client";
import { useState, useEffect } from "react";
import BetList from "@/components/BetList";

export default function BetsPage() {
  const [bets, setBets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const userId = "b6b2fde2-ef94-48ee-9bc6-4fcc5241f38c"; // Replace with actual userId from authentication or state

  // Fetch bets from the API
  async function fetchBets() {
    setLoading(true);
    try {
      const res = await fetch("/api/bets", { cache: "no-store" });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setBets(data);
    } catch (error) {
      console.error("Error fetching bets:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBets();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Active Bets</h1>
      {loading ? (
        <p>Loading bets...</p>
      ) : (
        <BetList userId={userId} bets={bets} refreshBets={fetchBets} />
      )}
    </div>
  );
}
