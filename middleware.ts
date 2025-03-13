import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/authMiddleware";
import jwt from "jsonwebtoken"; // Ensure JWT is imported

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Get token from cookies

  // Protect all routes under `/bets`
  if (req.nextUrl.pathname.startsWith("/bets")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login if no token
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!); // Decode token
      if (!decoded || typeof decoded !== "object" || !decoded.userId) {
        throw new Error("Invalid token");
      }
    } catch (error) {
      console.error("Invalid token:", error);
      return NextResponse.redirect(new URL("/login", req.url)); // Redirect if invalid token
    }
  }

  return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
  matcher: ["/bets/:path*"], // Protect all `/bets` routes
};
