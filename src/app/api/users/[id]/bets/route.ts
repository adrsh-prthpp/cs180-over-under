import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    console.log("Fetching bets for user:", params.id);

    const userBets = await prisma.user.findUnique({
      where: { id: params.id },
      include: {
        betPlacements: {
          include: {
            bet: true, // ✅ Include full bet details
          },
        },
      },
    });

    if (!userBets) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // ✅ Format response properly
    const formattedBets = userBets.betPlacements.map((betUser) => ({
      betId: betUser.bet.id,
      question: betUser.bet.question,
      choice: betUser.choice,
      expiry: betUser.bet.expiry,
    }));

    return NextResponse.json(formattedBets);
  } catch (error) {
    console.error("Error fetching user bets:", error);
    return NextResponse.json({ error: "Failed to fetch user bets" }, { status: 500 });
  }
}
