
import { Cardwrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

 export const ErrorCard = () => {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-slate-500 to-slate-800">
        <Cardwrapper
          headerLabel="Something went wrong"
          backButtonLabel="Back to login"
          backButtonHref="/auth/login"
        >
          <div className="w-full flex justify-center items-center">
            <ExclamationTriangleIcon className="text-destructive" />
          </div>
        </Cardwrapper>
      </div>
    );
};