import { loginSchema } from "../schemas/validations";
import { z } from "zod";

export type LoginFormValidation = {
  username: string;
  password: string;
};

export type RegistrationFormValidation = {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
};

export const loginTypeZod = z.infer<typeof loginSchema>;
