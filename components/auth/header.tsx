import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: [ "600"],
  })

  interface HeaderProps {
    label:string; };

    export const Header = ({label}:HeaderProps) => {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h1
          className={cn("text-4xl font-bold text-black flex justify-center items-center ", font.className)}
        > Auth <span className="text-2xl p-3 ">🔐</span></h1>
        <p className="text-muted-foreground text-sm">{label}</p>
      </div>
    );
  }