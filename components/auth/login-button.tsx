"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild = false,
}: LoginButtonProps) => {
    const   router = useRouter();
  // Define the onClick handler
  const onClick = () => {
    router.push("/auth/login");}

    if (mode === "modal") {
      
        return(
            <span>
                TODO:implement login modal
            </span>
        )
  };
  

  // Handle the asChild behavior
  if (asChild) {
    return React.cloneElement(children as React.ReactElement);
  }

  // Return the main component
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
