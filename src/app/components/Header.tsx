import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="flex px-36 py-4 justify-between items-center bg-gradient-to-r from-customBlue via-black to-customDarkBlue">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex gap-2 items-center"
      >
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
      </motion.div>
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
