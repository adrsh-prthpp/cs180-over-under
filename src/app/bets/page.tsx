"use client";
import { useState, useEffect } from "react";
import BetList from "@/components/BetList";

export default function BetsPage() {
  const [bets, setBets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch bets from the API
  async function fetchBets() {
    setLoading(true);
    try {
      const res = await fetch("/api/bets", { cache: "no-store" }); // Prevents caching old data
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
        // Pass fetchBets as a prop so BetList can refresh the data if needed.
        <BetList bets={bets} refreshBets={fetchBets} />
      )}
    </div>
  );
}
