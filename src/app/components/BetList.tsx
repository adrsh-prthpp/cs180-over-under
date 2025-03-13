"use client";
import BetCard from "./BetCard";
import React from "react"; // ✅ Import React to properly handle props

interface Bet {
  id: string;
  name: string;
  expiry?: number;
  overCount: number;
  underCount: number;
}

interface BetListProps {
  bets: Bet[];
  refreshBets: () => Promise<void>;
}

const BetList: React.FC<BetListProps> = ({ bets, refreshBets }) => {
  return (
    <div className="space-y-4">
      {bets.length > 0 ? (
        bets.map((bet) => (
          <BetCard
            key={bet.id}
            id={bet.id}
            name={bet.name}
            expiry={bet.expiry}
            overCount={bet.overCount}
            underCount={bet.underCount}
            refreshBets={refreshBets}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No active bets.</p>
      )}
    </div>
  );
};

export default BetList;
