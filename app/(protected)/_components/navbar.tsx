"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-transparent flex justify-between items-center p-4 rounded-xl w-full
     shadow-sm">
      <div className="flex gap-x-2">
        <Button asChild variant={pathname === "/home" ? "default" : "outline"}>
          <Link href="/home">Home</Link>
        </Button>
        <Button asChild variant={pathname === "/joinUs" ? "default" : "outline"}>
          <Link href="/joinUs">Join us</Link>
        </Button>
        <Button asChild variant={pathname === "/needHelp" ? "default" : "outline"}>
          <Link href="/needHelp">Need help</Link>
        </Button>
        <Button asChild variant={pathname === "/needHelp" ? "default" : "outline"}>
          <Link href="/howToHelp">How to Help</Link>
        </Button>





      
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
