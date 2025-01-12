import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button" 
import {cn} from  "@/lib/utils"
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: [ "600"],
})
export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center  
        bg-gradient-to-r from-slate-500 to-slate-800"
    >
      <div className="space-y-4">
        <h1 className={cn("text-4xl font-bold text-white text-center", font.className)}>
          🔐 Welcome to Next.js Auth!
        </h1>
        <p className="text-lg text-white text-center">
          a simple example of authentication with Next.js
        </p>
        <div className="flex justify-center">
          <LoginButton mode="modal" asChild>
            <Button variant="default" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
 
}
