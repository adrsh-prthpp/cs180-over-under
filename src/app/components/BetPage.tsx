"use client";
import { useState, useEffect } from "react";
import BetList from "@/components/BetList";

interface Bet {
  id: string;
  name: string;
  expiry?: number;
  overCount: number;
  underCount: number;
}

export default function BetPage() {
  const [bets, setBets] = useState<Bet[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBets(): Promise<void> {
    setLoading(true);
    try {
      const res = await fetch("/api/bets", { cache: "no-store" });
      const data: Bet[] = await res.json();
      setBets(data);
    } catch (error) {
      console.error("Error fetching bets:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBets();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Active Bets</h2>
      {loading ? <p>Loading bets...</p> : <BetList bets={bets} refreshBets={fetchBets} />}
    </div>
  );
}
