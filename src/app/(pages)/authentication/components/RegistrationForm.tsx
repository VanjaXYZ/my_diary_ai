"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import FormWrapper from "./FormWrapper";
import React from "react";
import { RegistrationFormValidation } from "@/app/types/types";
import { registerTypeZod } from "../../../types/types";
import { registrationSchema } from "@/app/schemas/validations";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RegistrationInputs from "./RegistrationInputs";

const RegistrationForm: React.FC<RegistrationFormValidation> = () => {
  const form = useForm<registerTypeZod>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
