"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div className="h-screen  bg-gradient-to-tr from-customBlue via-black to-customDarkBlue">
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
            <Button
              className="rounded-full font-bold h-12 w-44 text-white bg-customBlue hover:bg-blue-800 transition-all shadow-lg"
              onClick={() => signIn()}
            >
              Login/Register
            </Button>
          </div>
        </div>

        <motion.div
          className="h-96 flex flex-col justify-center items-center  mx-auto px-4 mt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold text-white mb-4 animate-pulse">
            Welcome to <span className="text-customBlue">StockVerse</span>
          </h1>
          <p className="text-2xl text-gray-200 mb-8">
            Next Generation Platform for Stocks and Trading
          </p>
          <Button
            onClick={() => signIn()}
            className="rounded-full font-bold h-14 w-48 text-white bg-customBlue hover:bg-blue-800 transition-all shadow-lg"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </>
  );
}
