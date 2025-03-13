"use client";
import { useState } from "react";
import { apiFetch } from "@/lib/api";

interface BetCardProps {
  id: string;
  name: string;
  expiry?: number;
  overCount: number;
  underCount: number;
  refreshBets: () => void;
}

export default function BetCard({ id, name, expiry, overCount, underCount, refreshBets }: BetCardProps) {
  const [loading, setLoading] = useState(false);

  async function placeBet(choice: "over" | "under") {
    if (!id) return alert("Bet ID is missing");

    setLoading(true);
    try {
      await apiFetch("/api/bets/place", {
        method: "POST",
        body: JSON.stringify({ betId: id, choice }),
      });

      refreshBets();
    } catch (error) {
      console.error("Bet placement error:", error);
      alert("Failed to place bet");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{name}</h3>
      {expiry && <p className="text-sm text-gray-500">Expires in: {Math.floor(expiry / 1000)}s</p>}
      <div className="flex justify-between mt-2">
        <button onClick={() => placeBet("over")} disabled={loading} className="bg-green-500 text-white px-3 py-1 rounded-md">
          Over ({overCount})
        </button>
        <button onClick={() => placeBet("under")} disabled={loading} className="bg-red-500 text-white px-3 py-1 rounded-md">
          Under ({underCount})
        </button>
      </div>
    </div>
  );
}
