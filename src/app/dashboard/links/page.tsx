import { catIcon, spotify } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";

const page = () => {
  return (
    <section className="bg-[#141414] py-10 flex flex-col h-full w-full relative max-container">
      <div className="flex flex-col gap-5 mt-3">
        <h2 className="text-[#FFF3EF] text-[18px] font-onest font-medium">
          Payment Links
        </h2>

        <div className="flex gap-2 items-center">
          <Image src={spotify} alt="sportify Icon" />
          <p className="text-[#FFF3EF] font-onest text-[14px] font-light">
            Total Payments Created
          </p>
        </div>

        <div className="flex w-full justify-between items-center px-3 py-5 bg-[#070707] border border-[#111111] rounded-[12px]">
          <p className="text-[#FFF3EF] font-onest text-[16px] font-medium">
            0 Links
          </p>
        </div>

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

        <div className="flex flex-col mt-10 justify-center items-center gap-3">
          <Image src={catIcon} alt="catIcon" className="cat Image" />
          <Link href="/create">
            <p className="font-onest font-light text-[12px] text-[#FFF3EF]">
              <span className="text-primary underline">
                Create a payment link{" "}
              </span>{" "}
              to start receiving payments
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
