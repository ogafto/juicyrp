import type { Metadata } from "next";
// 1. Importujemy font Poppins z paczki Next.js
import { Poppins } from "next/font/google";
import "./globals.css";

// 2. Konfigurujemy font Poppins (wybieramy grubości, podzbiór łaciński i tworzymy zmienną CSS)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "JuicyRP - Serwer Roleplay",
  description: "Najlepszy serwer Roleplay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      {/* 3. Używamy poppins.className, aby Next.js twardo wymusił ten font */}
      <body className={`${poppins.className} bg-[#0F0905] text-white min-h-screen flex flex-col antialiased m-0 p-0`}>
        <Navbar />
        <main className="flex-grow w-full m-0 p-0 relative">
          {children}
        </main>
      </body>
    </html>
  );
}