import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

// Define a custom interface for JWT payload
interface AuthPayload extends JwtPayload {
  userId: string;
}

export function verifyToken(req: NextRequest): AuthPayload | null {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null; // No token provided
  }

  const token = authHeader.split(" ")[1]; // Extract the token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthPayload;
    return decoded; // Now properly typed with userId
  } catch (error) {
    return null; // Invalid token
  }
}
