import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, betId, choice } = await req.json();

    if (!userId || !betId || !choice) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

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
