"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // Validate the input fields using the schema
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    // Return an error response if validation fails
    return {
      error: "Invalid email or password",
    };
  }

  // Proceed with the login logic if validation is successful
  try {
    // Simulate sending an email or performing login-related operations
    console.log("Login successful for:", validatedFields.data);

    // Return a success response
    return {
      success: "Email sent",
    };
  } catch (err) {
    // Handle any errors during the operation
    console.error("An error occurred:", err);
    return {
      error: "An unexpected error occurred. Please try again later.",
    };
  }
};
