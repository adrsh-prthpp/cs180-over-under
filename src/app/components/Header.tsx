"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // Get current page path

  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Over/Under</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className={`hover:text-blue-400 ${pathname === "/" ? "text-blue-400" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/bets" className={`hover:text-blue-400 ${pathname === "/bets" ? "text-blue-400" : ""}`}>
                Bets
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
