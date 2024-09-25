import AccountDropDown from "@/components/accountDropDown";
import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <>
      <div className="h-screen  dark:bg-customDarkPurpleShade bg-white">
        <div className="flex px-36 py-4 justify-between items-center">
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
          <div>
            <AccountDropDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
