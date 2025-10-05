"use client";

import { usePathname } from "next/navigation";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";
import { homeIcon, linkIcon, transactionIcon } from "@/assets/icons";

export default function DashboardClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbar = ["/dashboard/create"];
  const shouldHide = hideNavbar.some((path) => pathname.startsWith(path));

  return (
    <>
      {!shouldHide && (
        <main className="bg-[#141414] sm:px-10  px-3 h-screen w-full relative max-container">
          {" "}
          <div className="fixed bottom-0 left-0 right-0 flex justify-center">
            <div className="w-full max-w-[600px] text-white flex flex-col items-center gap-5 py-5 px-4">
              <div className="flex items-center justify-center">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-[#313131] bg-primary w-[60px] h-[60px] text-[30px] hover:opacity-55"
                >
                  +
                </Button>
              </div>

              <div className="flex w-full items-center justify-between cursor-pointer bg-[#070707] px-3 py-2">
                <Link
                  href="/dashboard"
                  className="flex flex-col gap-1 items-center"
                >
                  <Image
                    src={homeIcon}
                    alt="Home Icon"
                    className="text-gray-400"
                  />
                  <h1 className="text-[#8c8c8c] font-onest font-light text-[12px] hover:text-primary focus:text-primary">
                    Home
                  </h1>
                </Link>
                <Link
                  href="/dashboard/transactions"
                  className="flex flex-col gap-1 items-center"
                >
                  <Image
                    src={transactionIcon}
                    alt="Transaction Icon"
                    className="text-gray-400"
                  />
                  <h1 className="text-[#8c8c8c] font-onest font-light text-[12px] hover:text-primary focus:text-primary">
                    Transactions
                  </h1>
                </Link>
                <Link
                  href="/dashboard/links"
                  className="flex flex-col gap-1 items-center"
                >
                  <Image
                    src={linkIcon}
                    alt="Link Icon"
                    className="text-gray-400"
                  />
                  <h1 className="text-[#8c8c8c] font-onest font-light text-[12px] hover:text-primary focus:text-primary">
                    Links
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
      {children}
    </>
  );
}
