import BetCard from "@/components/BetCard";

const dummyBets = [
  { name: "Game 1", expiry: Date.now() + 60000, overCount: 3, underCount: 2 },
  { name: "Game 2", expiry: Date.now() + 120000, overCount: 5, underCount: 1 },
];

export default function BetList() {
  return (
    <div className="grid gap-4">
      {dummyBets.map((bet, index) => (
        <BetCard key={index} {...bet} />
      ))}
    </div>
  );
}
