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
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{name}</h3>
      {expiry && (
        <p className="text-sm text-gray-500">
          Expires in: {Math.max(0, Math.floor(timeLeft! / 1000))}s
        </p>
      )}
      <div className="flex justify-between mt-2">
        <button className="bg-green-500 text-white px-3 py-1 rounded-md">Over ({overCount})</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded-md">Under ({underCount})</button>
      </div>
    </div>
  );
}
