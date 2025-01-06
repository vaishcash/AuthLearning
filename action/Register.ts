"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";
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

const verificationToken = await generateVerificationToken(email);

await sendVerificationEmail(verificationToken.email, verificationToken.token);

return { success: "Conformation email sent!" };
};