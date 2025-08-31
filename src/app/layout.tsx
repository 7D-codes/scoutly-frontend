import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Scoutly",
  description: "Scouting Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen overflow-hidden">
      <body className={`${inter.variable} font-sans antialiased select-none h-screen overflow-hidden bg-white p-1`}>
        <div className="w-full h-full overflow-hidden relative border-white border-[12px] rounded-[32px]">
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
