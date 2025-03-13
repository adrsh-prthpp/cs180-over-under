"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CreateBetForm from "@/components/CreateBetForm";

export default function CreateBetPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (!storedUserId) {
      router.push("/login"); // Redirect if not logged in
    } else {
      setUserId(storedUserId);
    }
  }, [router]);

  if (!userId) return null; // Prevent rendering before redirect

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <CreateBetForm />
    </div>
  );
}
