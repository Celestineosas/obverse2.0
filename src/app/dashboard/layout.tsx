import { homeIcon, linkIcon, transactionIcon } from "@/assets/icons";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-[#141414] sm:px-10  px-3 h-screen w-full relative max-container">
    {children}
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
  <div className="w-full max-w-[600px] text-white flex flex-col items-center gap-5 py-5 px-4">
    <Link href="/create" className="flex items-center justify-center">
      <Button size="icon" variant="ghost" className="text-[#313131] bg-primary w-[60px] h-[60px] text-[30px] hover:opacity-55">+</Button>
    </Link>

    <div className="flex w-full items-center justify-between cursor-pointer bg-[#070707] px-3 py-2">
          
           <Link href="/dashboard" className="flex flex-col gap-1 items-center">
                <Image src={homeIcon} alt="Home Icon" className="text-gray-400" />
                <h1 className="text-[#8c8c8c] font-onest font-light text-[12px] hover:text-primary focus:text-primary">Home</h1>
            </Link>
            <Link href="/dashboard/transactions" className="flex flex-col gap-1 items-center">
                <Image src={transactionIcon} alt="Transaction Icon" className="text-gray-400" />
                <h1 className="text-[#8c8c8c] font-onest font-light text-[12px] hover:text-primary focus:text-primary">Transactions</h1>
            </Link>
            <Link href="/dashboard/links" className="flex flex-col gap-1 items-center">
                 <Image src={linkIcon} alt="Link Icon" className="text-gray-400" />
                <h1 className="text-[#8c8c8c] font-onest font-light text-[12px] hover:text-primary focus:text-primary">Links</h1>
            </Link>
    </div>
  </div>
</div>
    </main>;
}
