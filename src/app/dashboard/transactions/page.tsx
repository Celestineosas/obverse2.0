import { catIcon } from "@/assets/icons";
import { TransactionDetails } from "@/constants";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const page = () => {
  return (
    <section className="bg-[#141414] py-10 flex flex-col h-full w-full relative max-container">
      <div className="flex flex-col gap-5">
        <h2 className="text-[#FFF3EF] text-[18px] font-onest font-medium">
          Transactions
        </h2>

        <div className="relative w-full">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C8C8C] focus:text-[#FFF3EF]  transition-colors w-6 h-6" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 ml-1 p-3 border text-white font-onest bg-[#070707] border-[#111111] rounded-[92px] focus:outline-none placeholder:font-onest placeholder:text-[#8C8C8C]
                   focus:placeholder:text-[#FFF3EF] transition-colors"
          />
        </div>

        {/* No Transactions Design */}
        {/*    
        <div className="flex flex-col mt-10 justify-center items-center gap-3">
          <Image src={catIcon} alt="catIcon" className="cat Image" />
          <p className="font-onest font-light text-[12px] text-[#FFF3EF]">
            <span className="text-primary underline">
              Create a payment link{" "}
            </span>{" "}
            to start receiving payments
          </p>
      
      </div> */}

        {/* Teansactions Design */}
        {/* Static Rendering */}

        <div className="flex flex-col gap-5 mt-2">
          <h3 className="font-onest text-[#8C8C8C] text-[14px]">18 Sep 2025</h3>
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
        <div className="flex flex-col gap-5 mt-5">
          <h3 className="font-onest text-[#8C8C8C] text-[14px]">15 Sep 2025</h3>
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
      </div>
    </section>
  );
};

export default page;
