import { HomeIcon, linkIcon, transactionIcon } from "@/assets/icons";
import { Button } from "@/components/ui/Button";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#141414] w-[90%] h-screen m-auto relative max-container">
      {children}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center">
        <div className="w-full max-w-[600px] text-white flex flex-col items-center gap-5 py-5 px-4">
          <Link href="/create" className="flex items-center justify-center">
            <Button
              size="icon"
              variant="ghost"
              className="text-[#313131] bg-primary w-[60px] h-[60px] text-[30px] hover:opacity-55"
            >
              +
            </Button>
          </Link>

          <div className="flex w-full items-center justify-between cursor-pointer bg-[#070707] px-3 py-2">
            <Link
              href="/dashboard"
              className="flex gap-1 flex-col items-center group focus:outline-none"
            >
              <div className="w-6 h-6 transition invert-[0.6] group-hover:invert-0 group-focus:invert-0 group-active:invert-0">
                <Image src={HomeIcon} alt="Home Icon" width={24} height={24} />
              </div>
              <h1 className="text-[#8c8c8c] font-onest font-light text-[12px] transition group-hover:text-primary group-focus:text-primary group-active:text-primary">
                Home
              </h1>
            </Link>

            <Link
              href="/dashboard/transactions"
              className="flex gap-1 flex-col items-center group focus:outline-none"
            >
              <div className="w-6 h-6 transition invert-[0.6] group-hover:invert-0 group-focus:invert-0 group-active:invert-0">
                <Image src={linkIcon} alt="Transaction Icon" width={24} height={24} />
              </div>
             <h1 className="text-[#8c8c8c] font-onest font-light text-[12px] transition group-hover:text-primary group-focus:text-primary group-active:text-primary">
                Transactions
              </h1>
            </Link>
            <Link
              href="/dashboard/links"
              className="flex gap-1 flex-col items-center group focus:outline-none"
            >
              <div className="w-6 h-6 transition invert-[0.6] group-hover:invert-0 group-focus:invert-0 group-active:invert-0">
                <Image src={transactionIcon} alt="Link Icon" width={24} height={24} />
              </div>
              <h1 className="text-[#8c8c8c] font-onest font-light text-[12px] transition group-hover:text-primary group-focus:text-primary group-active:text-primary">
                Links
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
