"use client";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative overflow-hidden">
      {/* Show the floating gradient only on the home page */}
      {pathname === "/" && (
        <>
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-40 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        </>
      )}

      {children}
    </div>
  );
}
