import BetList from "@/components/BetList";

export default function BetsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Active Bets</h1>

      {/* Use the BetList component to display bets */}
      <BetList />
    </div>
  );
}
