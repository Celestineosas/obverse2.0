"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbar = ["/dashboard", "/create"];
  const shouldHide = hideNavbar.some((path) => pathname.startsWith(path));

  return (
    <>
      {!shouldHide && <Navbar />}
      {children}
    </>
  );
}
