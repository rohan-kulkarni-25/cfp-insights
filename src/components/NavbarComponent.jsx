import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const NavbarComponent = () => {
  const session = useSession();
  return (
    <nav className="flex flex-row items-center justify-between px-8 h-16 border-conference_primary border m-2 rounded-md shadow-md bg-white">
      <Avatar>
        <AvatarImage src={"/assets/branding/logo.png"} alt="react-india" />
        <AvatarFallback>RI</AvatarFallback>
      </Avatar>
      <div className="flex-1 flex justify-center items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>CFPs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Add Talk</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Committee</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Analytics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
