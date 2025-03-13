import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    console.log("Checking user with email:", email);

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    console.log("Prisma user result:", user);

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    if (!user.password) {
      return NextResponse.json({ error: "User has no password set" }, { status: 500 });
    }

    console.log("Verifying password...");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match.");
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    console.log("Password verified. Generating token...");

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    console.log("Token generated successfully.");

    return NextResponse.json({ success: true, token, user });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Failed to authenticate" }, { status: 500 });
  }
}
