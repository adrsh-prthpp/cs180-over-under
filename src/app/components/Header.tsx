"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4">
      <Link href="/" className="text-2xl font-bold">
        Over/Under
      </Link>
      <div className="space-x-4">
        <Link href="/bets" className="hover:underline">
          Bets
        </Link>
        <Link href="/create-bet" className="hover:underline">
          Create Bet
        </Link>
        {user ? (
          <>
            <span>👤 {user.name}</span>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="bg-blue-500 px-3 py-1 rounded">
            Login / Signup
          </Link>

        )}
      </div>
    </nav>
  );
}
