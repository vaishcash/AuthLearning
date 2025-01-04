"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // Validate the input fields using the schema
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    // Return an error response if validation fails
    return {
      error: "Invalid email or password",
    };
  }

  

    // Return a success response
   const { email, password } = validatedFields.data;

  try {
    await signIn ("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    
  }

  catch (error) {

    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid email or password",
          };
        default:
          return {
            error: "Something went wrong!",
          };
        
      }
    }
    throw error;
  }
};


