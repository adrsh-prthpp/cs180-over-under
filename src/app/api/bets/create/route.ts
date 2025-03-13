import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.creatorId || !body.question) {
      console.error("Invalid request payload:", body);
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { creatorId, name, expiry } = body;

    const newBet = await prisma.bet.create({
      data: {
        creatorId,
        name,
        expiry: expiry ? parseInt(expiry) : null,
      },
    });

    return NextResponse.json({ success: true, bet: newBet });
  } catch (error) {
    console.error("Error creating bet:", error);
    return NextResponse.json({ error: "Failed to create bet" }, { status: 500 });
  }
}
