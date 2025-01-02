"use Client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
    return (
      <div className="flex items-center w-full gap-x-6">
        <Button
          className="w-full  "
          size="lg"
          variant="outline"
          onClick={() => {}}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>

        <Button
          className="w-full "
          size="lg"
          variant="outline"
          onClick={() => {}}
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