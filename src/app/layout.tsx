import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cool Landing Page",
  description: "Created By Shahroz Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-[#2b4149] bg-gradient-to-b from-[#dfe9ef] from-70% to-[#f2f7fa]`}
      >
        {children}
      </body>
    </html>
  );
}
