"use client";
import { useState } from "react";
import InputField from "@/components/InputField";
import SelectionButtons from "@/components/SelectionButtons";

export default function CreateBetForm() {
  const [betName, setBetName] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [selectedSide, setSelectedSide] = useState<"over" | "under" | null>(null);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">Create a New Bet</h2>

      {/* Bet Name Input */}
      <InputField
        label="Bet Name"
        value={betName}
        onChange={(e) => setBetName(e.target.value)}
        placeholder="Enter bet name..."
      />

      {/* Expiry Time Input */}
      <InputField
        label="Expiration Time (Optional)"
        type="number"
        value={expiryTime}
        onChange={(e) => setExpiryTime(e.target.value)}
        placeholder="Enter time in seconds"
      />

      {/* Over/Under Selection */}
      <SelectionButtons selectedSide={selectedSide} setSelectedSide={setSelectedSide} />

      {/* Submit Button */}
      <button
        className="w-full mt-6 bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold px-6 py-3 rounded-md"
      >
        Create Bet
      </button>
    </div>
  );
}
