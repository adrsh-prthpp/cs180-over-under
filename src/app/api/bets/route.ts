import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const bets = await prisma.bet.findMany({
      include: {
        betUsers: true,
      },
    });

    const formattedBets = bets.map((bet) => {
      const overCount = bet.betUsers.filter((vote) => vote.choice === "over").length;
      const underCount = bet.betUsers.filter((vote) => vote.choice === "under").length;

      return {
        id: bet.id,
        question: bet.question,
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
