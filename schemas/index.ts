import * as z from "zod";

export const NewPasswordSchema = z.object({ password: z.string().min(9 , { message: "Password must be at least 9 characters" }) });


export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});



export const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});
export const RegisterSchema = z.object({
    email: z.string().email({ message: "Email is required" }),
    password: z.string().min(6, { message: "minimum 6 characters required" }),
    name: z.string().min(1, { message: "Name is required" }),
});
