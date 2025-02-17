import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LayoutWrapper from "@/components/LayoutWrapper"; // Import the client wrapper

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-gray-900 text-white`}>
        <Header />
        <LayoutWrapper>
          <main className="relative z-10 max-w-6xl mx-auto p-6 animate-fade-in">{children}</main>
        </LayoutWrapper>
        <Footer />
      </body>
    </html>
  );
}
