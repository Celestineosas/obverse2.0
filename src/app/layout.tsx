import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Figtree, Onest } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ui/ClientLayout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Obverse",
  description: "Your Payment Made Easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${onest.variable} ${figtree.variable} ${geistMono.variable} antialiased bg-[#141414]`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
