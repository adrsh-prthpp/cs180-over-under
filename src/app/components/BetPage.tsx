import BetList from "@/components/BetList";

export default function BetPage() {
  // Mock bet data to pass as props
  const activeBets = [
    { id: "1", name: "Game 1", overCount: 3, underCount: 2, expiry: 60000 },
    { id: "2", name: "Game 2", overCount: 5, underCount: 1, expiry: 120000 },
  ];

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Active Bets</h2>
      <BetList bets={activeBets} /> {/* Pass bets as a prop */}
    </div>
  );
}
