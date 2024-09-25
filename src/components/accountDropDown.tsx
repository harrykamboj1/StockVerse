"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BiLogOut } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { ModeToggle } from "./modeToggle";
import DeleteAccountAction from "@/app/explore/action";
import { useRouter } from "next/navigation";

const AccountDropDown = () => {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const router = useRouter();

  const handleOpenChange = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <>
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your
              account and any data your have.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await DeleteAccountAction();
                setAlertOpen(false);
                router.push("/");
              }}
            >
              Yes, delete my account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex gap-4">
        <ModeToggle />
        <DropdownMenu open={open} onOpenChange={handleOpenChange}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center dark:bg-customDarkPurpleShade hover:dark:bg-customDarkPurpleShade gap-2">
              <Avatar>
                <AvatarImage src={session.data?.user?.image ?? ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {open ? (
                <IoIosArrowUp className="dark:text-white" />
              ) : (
                <IoIosArrowDown className="dark:text-white" />
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownMenuItem
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
            >
              <BiLogOut className="mr-2 h-5 w-5" />
              Sign Out
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => {
                setAlertOpen(true);
              }}
            >
              <MdDeleteForever className="mr-2 h-5 w-5" /> Delete Account
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default AccountDropDown;
