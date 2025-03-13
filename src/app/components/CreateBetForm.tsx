"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import InputField from "@/components/InputField";
import SelectionButtons from "@/components/SelectionButtons";

export default function CreateBetForm() {
  const [betName, setBetName] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [selectedSide, setSelectedSide] = useState<"over" | "under" | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize Next.js router for redirection

  const handleCreateBet = async () => {
    if (!betName || !selectedSide) {
      alert("Please enter a bet name and select Over or Under.");
      return;
    }

    setLoading(true); // Show loading state

    try {
      const response = await fetch("/api/bets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          betName,
          expirationTime: expiryTime ? parseInt(expiryTime) : null,
          choice: selectedSide,
        }),
      });

      if (response.ok) {
        router.push("/bets"); // Redirect to Bets page on success
      } else {
        alert("Failed to create bet");
      }
    } catch (error) {
      console.error("Error creating bet:", error);
      alert("An error occurred while creating the bet.");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

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
        onClick={handleCreateBet}
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Bet"}
      </button>
    </div>
  );
}
