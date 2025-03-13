import BetList from "@/components/BetList";

export default function BetsPage() {
  // Mock data for active bets
  const activeBets = [
    { id: "1", name: "Game 1", overCount: 3, underCount: 2, expiry: 60000 },
    { id: "2", name: "Game 2", overCount: 5, underCount: 1, expiry: 120000 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Active Bets</h1>

      {/* Pass `bets` as a prop to `BetList` */}
      <BetList bets={activeBets} />
    </div>
  );
}
