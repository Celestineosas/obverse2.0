"use client";
import { useState } from "react";

import {
  arrowDown2,
  arrowRight2,
  logo,
  logoDark,
  logoText,
  logoTextDark,
  rightArrow,
  spotify,
  stashIcon,
  transactionIcon,
} from "@/assets/icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { TransactionDetails } from "@/constants";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import SalesChart from "@/components/ui/SalesChart";

const page = () => {
  const chains = ["All-Chains", "Arbitrum", "Base", "Starknet", "Solana"];
  const durations = [
    "All-Time",
    "This Week",
    "Last Month",
    "Last 3 Months",
    "Last 6 Months",
    "Last Year",
  ];
  const [selectedChain, setSelectedChain] = useState(chains[0]);
  const [selectedDuration, setSelectedDuration] = useState(durations[0]);

  return (
    <section className="bg-[#141414] sm:px-8  px-5 flex flex-col h-full w-full relative max-container">
      <nav className=" flex justify-between py-7 items-center w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center sm:gap-4 gap-1">
            <Image src={logoDark} alt="logo" className="w-7" />
            <Image src={logoTextDark} alt="logoText" className="w-25 mb-1" />
          </div>

          {/* Chain Select Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="normal"
                size="normal"
                className="p-3 bg-[#070707] border border-[#111111] text-[#FFF3EF] font-onest text-[14px] font-light whitespace-nowrap flex gap-3 items-center"
              >
                <p>{selectedChain}</p>
                <Image src={arrowDown2} alt="Arrow down" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-[#070707] text-[#FFF3EF] border-transparent font-onest">
              <DropdownMenuLabel>Chains</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {chains.map((chain) => (
                <DropdownMenuItem
                  key={chain}
                  onClick={() => setSelectedChain(chain)}
                >
                  {chain}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <div className="flex flex-col gap-5">
        <h2 className="text-[#FFF3EF] text-[16px] font-onest font-medium">
          Welcome, Tumi
        </h2>

        <div className="flex  justify-between items-center">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-2 items-center">
              <Image src={spotify} alt="sportify Icon" />
              <p className="text-[#FFF3EF] font-onest text-[14px] font-light">
                Total Payments Collected
              </p>
            </div>
          </div>

          {/* Durations Select Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="normal"
                size="normal"
                className="p-0 bg-transparent border-transparent text-[#FFF3EF] font-onest text-[14px] font-light whitespace-nowrap flex gap-3 items-center"
              >
                <p>{selectedDuration}</p>
                <Image src={arrowDown2} alt="Arrow down" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-[#070707] text-[#FFF3EF] border-transparent font-onest">
              <DropdownMenuLabel>Durations</DropdownMenuLabel>
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

        {/* Sales Chart */}
        
          <SalesChart />
        
      </div>

      {/* No Recent Transactions */}
      {/* 
      <div className="flex flex-col gap-3 w-full">

        <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
                 <Image src={stashIcon} alt="stash Icon" className="" />
                 <p className="text-[#FFF3EF] font-onest text-[14px] font-light">Total Links Created</p>
            </div>
            <div className="flex w-full justify-between items-center px-3 py-5 bg-[#070707] border border-[#111111] rounded-[12px]">
                <p className="text-[#FFF3EF] font-onest text-[16px] font-light">0</p>
                 <Image src={arrowRight2} alt="Arrow RIght" className="" />
            </div>
        </div>
        <h2 className="text-[#FFF3EF] font-onest text-[16px] font-medium">
          Recent Transactions
        </h2>
        <div className="flex flex-col justify-center items-center gap-3">
          <Image src={catIcon} alt="catIcon" className="cat Image" />
          <p className="font-onest font-light text-[12px] text-[#FFF3EF]">
            <span className="text-primary underline">
              Create a payment link{" "}
            </span>{" "}
            to start receiving payments
          </p>
        </div>
      </div> */}

      {/* Transactions Section */}
      <div className="flex flex-col gap-3 w-full mt-6">
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <Image src={stashIcon} alt="stash Icon" />
            <p className="text-[#FFF3EF] font-onest text-[14px] font-light">
              Total Links Created
            </p>
          </div>
          <div className="flex w-full justify-between items-center px-3 py-5 bg-[#070707] border border-[#111111] rounded-[12px]">
            <p className="text-[#FFF3EF] font-onest text-[16px] font-medium">
              54 Links
            </p>
            <Image src={arrowRight2} alt="Arrow RIght" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-[#FFF3EF] font-onest text-[16px] font-medium">
            Recent Transactions
          </h2>
          <span className="flex gap-2">
            <p className="font-onest text-primary text-[14px] font-medium">
              View all
            </p>
            <Image src={rightArrow} alt="right arrow" />
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {TransactionDetails.map((item) => (
            <div
              key={item.label}
              className="flex w-full justify-between items-center px-3 py-5 bg-[#070707] border border-[#111111] rounded-[12px]"
            >
              <div className="flex gap-2 items-center">
                <Image src={item.asseticon} alt="Assest Icon" />
                <p className="font-onest font-light text-[12px] text-[#FFF3ef]">
                  {item.label} payed ${item.amount}
                </p>
              </div>
              <p className="text-[#5eeF63]">+{item.net} USDC</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
