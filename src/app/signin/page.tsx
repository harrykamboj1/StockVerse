"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SignIn = () => {
  const handleSubmit = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      // Handle errors here
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#160F30] via-[#160F30] to-[#160F30]">
      <div className="flex items-center gap-3 p-8">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          StockVerse
        </h1>
      </div>
      <Card className="w-max border-x-customBlue border-y-customBlue border-spacing-14 border-2 mt-8 rounded-xl shadow-2xl bg-[#301E67]  transform transition-transform  hover:shadow-2xl  ease-in-out duration-300">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold text-white text-center tracking-wider">
            Welcome to StockVerse
          </CardTitle>
          <CardDescription className="text-white text-lg text-center mt-2">
            Simple, Free Investing
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 flex flex-col items-center">
          <Button
            onClick={handleSubmit}
            className="flex items-center gap-3 h-16 w-64 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl ease-in-out duration-300"
          >
            <FcGoogle className="h-10 w-10" />
            <span className="text-xl font-semibold text-gray-700">
              Sign in with Google
            </span>
          </Button>
        </CardContent>
        <CardFooter className="mt-6">
          <p className="text-sm text-gray-300 text-center px-4">
            By proceeding, I agree to T&C, Privacy Policy & Tariff Rates
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
