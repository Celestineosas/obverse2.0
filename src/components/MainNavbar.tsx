"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/constants";
import { logo, logoDark, logoText, logoTextDark } from "@/assets/icons";
import { Button } from "./ui/Button";



const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full bg-transparent">
      <nav className="sm:px-10 lg:mx-20 sm:mx-15 mx-5 px-5 flex justify-between py-3  items-center rounded-[64px] bg-[#22201D] border border-[#2d2b29]">
        
        <Link href="/" onClick={closeMenu}>
          <div className="flex sm:gap-4 gap-2">
            <Image src={logoDark} alt="logo" />
            <Image src={logoTextDark} alt="logoText" />
          </div>
        </Link>

  
        <ul className="lg:flex flex-1 justify-center items-center gap-10 hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <Link
                href={`/${item.link}`}
                className="font-onest text-sm text-[#FFF3EF]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

    
        <button
          className="lg:hidden text-[30px] font-bold text-[#FFF9F8]"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>

        
        <div
          className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-md z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            className="absolute top-5 right-5 text-[30px] text-gray-600"
            onClick={closeMenu}
          >
            <FiX />
          </button>

  
          <ul className="flex flex-col items-start px-6 pt-20 space-y-6">
            {navLinks.map((item) => (
              <li key={item.label} className="w-full">
                <Link
                  href={`/${item.link}`}
                  className="block font-onest text-sm text-[#131313] py-1"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          
          <Button
            className="flex lg:hidden bg-white border-gray-500 mt-10 ml-5"
            size="normal"
          >
            Join Waitlist
          </Button>
        </div>

        
        <Button className="hidden lg:flex text-[12px] font-medium" variant="normal" size="normal">
          Join Waitlist
        </Button>
      </nav>
    </header>
  );
};

export default MainNavbar;
