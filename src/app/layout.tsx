import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Header />
        <main className="max-w-6xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
