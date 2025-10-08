import React from "react";
import MainNavbar from "./MainNavbar";
import { paymentDarkBg } from "@/assets/images";
import { Button } from "./ui/Button";

const Main = () => {
  return (
    <section
      className="w-full m-auto flex flex-col gap-10 items-center pt-5 h-screen bg-cover lg:bg-center bg-top-right"
      style={{ backgroundImage: `url(${paymentDarkBg.src})` }}
    >
      <MainNavbar />
     <div className="w-[90%] flex flex-col items-center gap-5 mt-10">

        <div>
          <Button
            size="normal"
            variant="normal"
            className="font-onest text-[14px] bg-[#2b1e1a] border-[0.5px] border-[#F8cfcb] text-primary"
          >
            Coming Soon!
          </Button>
        </div>
        <div className="flex gap-2 flex-col items-center">
          <h1 className="font-onest font-bold sm:text-[45px] text-[25px] max-w-[625px] bg-gradient-to-r from-[#FFFFFF] to-[#FF7849] bg-clip-text text-transparent text-center">
            Accept Stablecoins in chat <br /> with built-in invoicing
          </h1>
          <p className="text-[#FFFFFF] font-onest sm:text-[16px] text-[14px] max-w-[342px] text-center">
            Payment links, QR codes, and invoicing, all automated right within
            your communities.
          </p>
        </div>

        <form className="flex items-center relative w-full mt-5 max-w-md">
          <input
            type="text"
            placeholder="Enter your email address"
            className="flex-1  p-5 bg-transparent border-[0.5px] border-[#393939] text-white rounded-[40px] focus:outline-none placeholder:font-onest placeholder:text-[14px] placeholder:text-white"
          />
          <Button
            type="submit"
            size="normal"
            variant="normal"
            className="absolute right-3 font-medium font-figtree text-[14px] max-sm:px-5"
          >
            Get Notified
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Main;
