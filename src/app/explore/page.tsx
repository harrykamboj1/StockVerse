"use client";
import AccountDropDown from "@/components/accountDropDown";
import Image from "next/image";
import React, { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="h-screen  dark:bg-customDarkPurpleShade bg-white">
        <div className="flex px-32 py-4 justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image
              src="/logo.png"
              width={60}
              height={60}
              alt="Stock Verse Logo"
              className="rounded-full"
            />
            <p className="font-bold text-2xl dark:text-white text-black">
              STOCKVERSE
            </p>
          </div>
          <div className="flex gap-x-4 text-xl font-semibold left-0   self-center justify-start cursor-pointer">
            <a
              href="/explore"
              onClick={() => setActive(0)}
              className={`${active == 0 ? "text-blue-500" : "text-white"}`}
            >
              Explore
            </a>
            <a
              href="/dashboard"
              onClick={() => setActive(1)}
              className={`${active == 1 ? "text-customBlue" : "text-white"}`}
            >
              Dashboard
            </a>
          </div>
          <div>
            <AccountDropDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
