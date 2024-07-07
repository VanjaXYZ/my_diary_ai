"use client";
import { registrationSchema } from "@/app/schemas/validations";
import { RegistrationFormValidation } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Config } from "../../../../../config";
import { registerTypeZod } from "../../../types/types";
import FormWrapper from "./FormWrapper";
import RegistrationInputs from "./RegistrationInputs";
import { useRouter } from "next/navigation";

const RegistrationForm: React.FC = () => {
  const router = useRouter();
  const form = useForm<registerTypeZod>({
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
        toast({
          description: response?.data?.message,
        });
        router.replace("/authentication");
        return response;
      }
    } catch (error: any) {
      toast({
        description: error.response.data.message,
      });
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
