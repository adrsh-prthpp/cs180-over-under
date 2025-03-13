import BetCard from "./BetCard";

interface Bet {
  id: string;
  name: string;
  overCount: number;
  underCount: number;
  expiry: number;
}

interface BetListProps {
  bets: Bet[];
}

export default function BetList({ bets }: BetListProps) {
  return (
    <div className="space-y-4">
      {bets.length > 0 ? (
        bets.map((bet) => <BetCard key={bet.id} {...bet} />)
      ) : (
        <p className="text-gray-400">No active bets.</p>
      )}
    </div>
  );
}
