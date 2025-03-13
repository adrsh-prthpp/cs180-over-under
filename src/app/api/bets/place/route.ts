import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, betId, choice } = await req.json();

    if (!userId || !betId || !choice) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("Received vote request:", { userId, betId, choice });

    // Check if the user exists
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      console.error("User does not exist:", userId);
      return NextResponse.json({ error: "User does not exist" }, { status: 404 });
    }

    // Upsert the vote in the database
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
