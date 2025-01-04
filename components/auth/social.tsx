"use Client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


export const Social = () => {

  const onClick = (provider:"google" | "github") => {
    signIn(provider,{
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })

  }
    return (
      <div className="flex items-center w-full gap-x-6">
        <Button
          className="w-full  "
          size="lg"
          variant="outline"
          onClick={() => onClick("google")}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>

        <Button
          className="w-full "
          size="lg"
          variant="outline"
          onClick={() => onClick("github")}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
        <Button
          className="w-full "
          size="lg"
          variant="outline"
          onClick={() => {}}
        >
          <FaFacebook className="h-5 w-5" />
        </Button>
      </div>
    );
}