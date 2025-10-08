"use client";
import { useState } from "react";

import { arrowDown2, arrowLeft, plus } from "@/assets/icons";
import { Button } from "@/components/ui/Button";
import Image from "next/image";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import CreateModal from "@/components/CreateModal";

const page = () => {
  const coins = ["USDT", "USDC", "DAI"];
  const durations = ["30 mins", "60 mins", "7 days", "60 days", "3 Months"];

  const [selectedCoin, setSelectedCoin] = useState("Select asset type");
  const [selectedDuration, setSelectedDuration] = useState(
    "Select expiration time"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#141414] w-[90%] m-auto py-5 h-screen  relative max-container">
      <div className="flex flex-col gap-5">
        <div className="flex items-center sm:justify-between max-sm:gap-5">
          <Link href="/dashboard">
            <Button variant="default" size="icon" className="bg-[#111010] p-2">
              <Image src={arrowLeft} alt="Arrow Left" />
            </Button>
          </Link>

          <h2 className="text-[#FFF3EF] font-onest text-[18px] font-light">
            Total Payments Collected
          </h2>
          <div></div>
        </div>

        <form className="flex gap-5 sm:justify-center flex-col w-full">
          <p className="text-[#FFF3EF] font-onest text-[12px] font-light">
            Fill out the fields below to generate your payment link.
          </p>

          <div>
            <label
              htmlFor="name"
              className="block font-light text-[14px] font-onest text-[#FFF3EF] mb-2"
            >
              Link Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g, Jendol Supermarket Checkout"
              className="w-full p-3 border text-[#FFF3EF]  font-onest border-[#1b1b1b] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:font-onest "
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="name"
              className="block font-light text-[14px] font-onest text-[#FFF3EF] mb-2"
            >
              Stablecoin
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="w-full flex justify-between items-center p-3 border text-[#FFF3EF]  font-onest border-[#1b1b1b] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-primary">
                  <p className="text-[#8c8c8c] text-[14px]">{selectedCoin}</p>
                  <Image src={arrowDown2} alt="Arrow down" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40 bg-[#070707] text-[#FFF3EF] border border-[#111111] font-onest">
                <DropdownMenuLabel>Coin</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {coins.map((coin) => (
                  <DropdownMenuItem
                    key={coin}
                    onClick={() => setSelectedCoin(coin)}
                  >
                    {coin}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="w-full">
            <label
              htmlFor="name"
              className="block font-light text-[14px] font-onest text-[#FFF3EF] mb-2"
            >
              Expiraion Time
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="w-full flex justify-between items-center p-3 border text-[#FFF3EF]  font-onest border-[#1b1b1b] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-primary">
                  <p className="text-[#8c8c8c] text-[14px]">
                    {selectedDuration}
                  </p>
                  <Image src={arrowDown2} alt="Arrow down" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40 bg-[#070707] text-[#FFF3EF] border border-[#111111] font-onest">
                <DropdownMenuLabel>Duration</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {durations.map((duration) => (
                  <DropdownMenuItem
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                  >
                    {duration}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div
            onClick={() => setIsModalOpen(true)}
            className="flex gap-3 justify-center items-center max-sm:mt-3 cursor-pointer"
          >
            <h2 className="font-light text-[14px] font-onest text-primary ">
              Add More Fields
            </h2>
            <Image src={plus} alt="Plus" />
          </div>

          <div className="fixed bottom-5 left-0 right-0 flex justify-center">
            <Button
              variant="normal"
              size="normal"
              className="border-none font-onest font-medium text-[14px] py-4 w-2/3"
              type="submit"
            >
              Create Payment Link
            </Button>
          </div>
        </form>
      </div>

      {/* Modal */}
      <CreateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default page;
