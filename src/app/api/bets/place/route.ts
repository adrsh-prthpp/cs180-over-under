import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.userId || !body.betId || !body.choice) {
      console.error("Invalid request payload:", body);
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const { userId, betId, choice } = body;

    // Place bet
    const betUser = await prisma.betUser.upsert({
      where: { userId_betId: { userId, betId } },
      update: { choice },
      create: { userId, betId, choice },
    });

    return NextResponse.json({ success: true, betUser });
  } catch (error) {
    console.error("Error placing bet:", error);
    return NextResponse.json({ error: "Failed to place bet" }, { status: 500 });
  }
}
