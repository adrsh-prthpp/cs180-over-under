import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Fetch all bets along with the number of users who chose over/under
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

// POST: Create a new bet
export async function POST(req: Request) {
  try {
    const { betName, expiry, choice } = await req.json();

    const bet = await prisma.bet.create({
      data: {
        name: betName,
        expiry: expiry ? parseInt(expiry) : null,
      },
    });

    return NextResponse.json(bet, { status: 201 });
  } catch (error) {
    console.error("Error creating bet:", error);
    return NextResponse.json({ error: "Error creating bet" }, { status: 500 });
  }
}
