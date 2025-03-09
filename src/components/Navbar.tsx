import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ui/theme-button";

const Navbar = () => {
  return (
    <div className="h-[4.5rem] border-b border-b-gray-700 w-full flex items-center justify-between px-6 sticky top-0  ">
      <h1 className="text-2xl">Photo Album</h1>
      <div className="flex gap-6">
      <ModeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
