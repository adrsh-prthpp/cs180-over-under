import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/authMiddleware";

export async function POST(req: NextRequest) {
  try {
    const auth = verifyToken(req);
    if (!auth || !auth.userId) { // Ensure auth object has userId
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { betId, choice } = await req.json();

    if (!betId || !choice) {
      return NextResponse.json({ error: "Missing betId or choice" }, { status: 400 });
    }

    // Create or update the user's bet in BetUser table
    const betUser = await prisma.betUser.upsert({
      where: { userId_betId: { userId: auth.userId, betId } },
      update: { choice }, 
      create: { userId: auth.userId, betId, choice }, 
    });

    return NextResponse.json({ success: true, betUser });
  } catch (error) {
    console.error("Error placing bet:", error);
    return NextResponse.json({ error: "Failed to place bet" }, { status: 500 });
  }
}
