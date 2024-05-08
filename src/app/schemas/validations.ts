import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 4 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
export const registrationSchema = z
  .object({
    email: z.string().email({ message: "Invalid email." }),
    username: z.string().min(2, {
      message: "Username must be at least 4 characters.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
