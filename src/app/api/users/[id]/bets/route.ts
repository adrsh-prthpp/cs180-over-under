import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const userBets = await prisma.user.findUnique({
      where: { id: params.id },
      include: { bets: true },
    });

    return NextResponse.json(userBets);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch user bets" }, { status: 500 });
  }
}
