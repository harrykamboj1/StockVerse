import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex px-36 py-4 justify-between items-center bg-gradient-to-r from-customBlue via-black to-customDarkBlue">
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
      <div className="flex-grow"></div>
      <div>
        <Button className="rounded-full font-bold h-14 w-32 text-white bg-customBlue hover:bg-blue-800 transition-all shadow-lg">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Header;
