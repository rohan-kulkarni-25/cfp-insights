import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutIcon } from "lucide-react";
import { useSession } from "next-auth/react";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const user = useSelector((state) => state.user.user);
  const session = useSession();
  return (
    <nav className="flex flex-row items-center justify-between px-8 h-16 border-conference_primary border m-2 rounded-md shadow-md bg-white">
      <Avatar>
        <AvatarImage src={"/assets/branding/logo.png"} alt="react-india" />
        <AvatarFallback>RI</AvatarFallback>
      </Avatar>
      <div className="flex-1 flex justify-center items-center">
        <Menubar className="border-0 gap-8">
          <MenubarMenu>
            <Link href={"/home"} className="hover:cursor-pointer">
              <MenubarTrigger>Home</MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"/home/talks"} className="hover:cursor-pointer">
              <MenubarTrigger>Talks</MenubarTrigger>
            </Link>
          </MenubarMenu>
          {user.role == "admin" ? (
            <MenubarMenu>
              <Link href={"/home/committee"} className="hover:cursor-pointer">
                <MenubarTrigger>Committee</MenubarTrigger>
              </Link>
            </MenubarMenu>
          ) : null}
          {user.role == "admin" ? (
            <MenubarMenu>
              <Link href={"/home/analytics"} className="hover:cursor-pointer">
                <MenubarTrigger>Analytics</MenubarTrigger>
              </Link>
            </MenubarMenu>
          ) : null}
        </Menubar>
      </div>
      <div className="flex flex-row justify-center items-center gap-8">
        <span className="text-conference_primary">
          {session?.data?.user?.name || "USER"}
        </span>
        <Avatar>
          <AvatarImage src={session?.data?.user?.image} alt="@shadcn" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <LogOutIcon />
      </div>
    </nav>
  );
};

export default NavbarComponent;
