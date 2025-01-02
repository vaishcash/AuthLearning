"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // Validate the input fields using the schema
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    // Return an error response if validation fails
    return {
      error: "Invalid email or password",
    };
  }
const { email, password, name} = validatedFields.data 
const hashedPassword = await bcrypt.hash(password, 10); // Proceed with the login logic if validation is successful

const existingUser = await getUserByEmail(email);

if (existingUser) {
  return {
    error: "User already exists", 
}}

await db.user.create({
  data: {
    email: email,
    password: hashedPassword,
    name: name,
  },
})
  try {
    // Simulate sending an email or performing login-related operations
    console.log("Login successful for:", validatedFields.data);

    // Return a success response
    return {
      success: "User Created",
    };
  } catch (err) {
    // Handle any errors during the operation
    console.error("An error occurred:", err);
    return {
      error: "An unexpected error occurred. Please try again later.",
    };
  }
};
