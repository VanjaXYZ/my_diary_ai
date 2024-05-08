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
    const response = await fetch(`${Config.baseURL}/registration`, {
      method: "POST",
      body: JSON.stringify(values),
    });
    return response;
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
