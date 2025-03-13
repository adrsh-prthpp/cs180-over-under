import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const bets = await prisma.bet.findMany({
      include: {
        betUsers: true, // Fetch users who placed bets
      },
    });

    const formattedBets = bets.map((bet) => {
      const overCount = bet.betUsers.filter((user) => user.choice === "over").length;
      const underCount = bet.betUsers.filter((user) => user.choice === "under").length;

      return {
        id: bet.id,
        name: bet.name,
        expiry: bet.expiry,
        overCount,
        underCount,
      };
    });

    return NextResponse.json(formattedBets);
  } catch (error) {
    console.error("Error fetching bets:", error);
    return NextResponse.json({ error: "Failed to fetch bets" }, { status: 500 });
  }
}
