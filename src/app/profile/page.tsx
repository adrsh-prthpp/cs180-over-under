import UserProfile from "@/components/UserProfile";

export default function ProfilePage() {
  const userId = "user-1"; // Replace with actual userId from authentication or state

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <UserProfile userId={userId} />
    </div>
  );
}
