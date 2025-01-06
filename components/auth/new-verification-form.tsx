"use client";
import { Cardwrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/action/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { set } from "zod";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token");

      return;
    }
    if (!token) {
      setError("Invalid token");

      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-slate-500 to-slate-800">
      <Cardwrapper
        headerLabel="New Verification"
        backButtonLabel="Back to login"
        backButtonHref="/auth/login"
      >
        <div className="flex justify-center items-center w-full">
          {!error && !success && <BeatLoader />}

          <FormSuccess message={success} />
          {!success && <FormError message={error} />}
        </div>
      </Cardwrapper>
    </div>
  );
};
