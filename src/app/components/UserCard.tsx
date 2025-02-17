interface UserProps {
    name: string;
    phone: string;
    bets: string[];
  }
  
  export default function UserCard({ name, phone, bets }: UserProps) {
    return (
      <div className="border p-4 rounded-md shadow-md">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-gray-500">📞 {phone}</p>
        <p className="text-sm mt-2">Active Bets: {bets.length}</p>
      </div>
    );
  }
  