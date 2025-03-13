"use client";
import { useState, useEffect } from "react";

interface Bet {
  id: string;
  question: string;
  expiry?: number;
  overCount: number;
  underCount: number;
}

interface BetListProps {
  userId: string;
  bets: Bet[];
  refreshBets: () => Promise<void>;
}

export default function BetList({ userId, bets, refreshBets }: BetListProps) {
  async function placeVote(betId: string, choice: string) {
    console.log("Placing vote with userId:", userId, " betId:", betId, " choice:", choice);
  
    const response = await fetch("/api/bets/place", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, betId, choice }),
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      alert(`Failed to place vote: ${data.error}`);
    } else {
      alert("Vote placed!");
      refreshBets();
    }
  }
  
  

  return (
    <div>
      {bets.length > 0 ? (
        bets.map((bet) => (
          <div key={bet.id} className="border p-4 rounded-lg shadow-md">
            <p className="text-lg font-bold">{bet.question}</p>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => placeVote(bet.id, "over")}
                className="bg-green-500 text-white px-3 py-1 rounded-md"
              >
                Over ({bet.overCount})
              </button>
              <button
                onClick={() => placeVote(bet.id, "under")}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Under ({bet.underCount})
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No active bets.</p>
      )}
    </div>
  );
}
