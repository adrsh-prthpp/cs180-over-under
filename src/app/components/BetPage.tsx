import BetList from "@/components/BetList";

export default function BetPage() {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Active Bets</h2>
      <BetList />
    </div>
  );
}
