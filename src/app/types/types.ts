import { loginSchema, registrationSchema } from "../schemas/validations";
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

export type loginTypeZod = z.infer<typeof loginSchema>;

export type registerTypeZod = z.infer<typeof registrationSchema>;
