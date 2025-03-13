"use client";
import { useState } from "react";

interface BetCardProps {
  name: string;
  expiry?: number; // Timestamp in ms
  overCount: number;
  underCount: number;
}

export default function BetCard({ name, expiry, overCount, underCount }: BetCardProps) {
  const [timeLeft, setTimeLeft] = useState(expiry ? expiry - Date.now() : null);

  return (
    <div className="border p-6 rounded-lg shadow-md bg-gray-800 text-white transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg font-bold">{name}</h3>
      {expiry && (
        <p className="text-sm text-gray-400">
          Expires in: {Math.max(0, Math.floor(timeLeft! / 1000))}s
        </p>
      )}
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md transition hover:bg-green-600">
          Over ({overCount})
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md transition hover:bg-red-600">
          Under ({underCount})
        </button>
      </div>
    </div>
  );
}
