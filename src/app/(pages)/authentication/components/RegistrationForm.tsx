"use client";
import { registrationSchema } from "@/app/schemas/validations";
import { RegistrationFormValidation } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Config } from "../../../../../config";
import { registerTypeZod } from "../../../types/types";
import FormWrapper from "./FormWrapper";
import RegistrationInputs from "./RegistrationInputs";
import axios from "axios";

const RegistrationForm: React.FC<RegistrationFormValidation> = () => {
  const form = useForm<typeof registerTypeZod>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registrationSchema>) => {
    try {
      const response = await axios.post(`${Config.baseURL}/register`, {
        email: values.email,
        username: values.username,
        password: values.password,
      });
      if (response.status === 201) {
        console.log("Response: ", response);
        return response;
      }
    } catch (error) {
      console.error("Failed to register user.");
    }
  };
  return (
    <FormWrapper
      value={"register"}
      title={"Register"}
      description={"Register your new account here."}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-2">
            <RegistrationInputs form={form} />
          </CardContent>
          <CardFooter>
            <Button type="submit">Register</Button>
          </CardFooter>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default RegistrationForm;
