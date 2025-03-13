"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 animate-fade-in">
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Welcome to Over/Under
      </h1>
      <p className="text-lg text-gray-300 max-w-lg">
        The most exciting way to bet on games. Choose your side and test your predictions.
      </p>
      <button
      onClick={() => router.push("/create-bet")}
      className="mt-6 bg-blue-500 hover:bg-blue-600 transition duration-300 text-white font-semibold px-6 py-3 rounded-lg">
        Get Started
      </button>
    </div>
  );
}
