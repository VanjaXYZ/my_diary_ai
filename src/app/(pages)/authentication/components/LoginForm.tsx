"use client";
import { LoginFormValidation } from "@/app/types/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import LoginInputs from "./LoginInputs";
import FormSubmitButton from "./FormSubmitButton";
import { loginUser } from "@/app/routes/_auth/route";
import FormWrapper from "./FormWrapper";
import { useForm } from "react-hook-form";
import { loginTypeZod } from "../../../types/types";
import { loginSchema } from "@/app/schemas/validations";

const LoginForm: React.FC<LoginFormValidation> = () => {
  const form = useForm<loginTypeZod>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  return (
    <FormWrapper
      value={"login"}
      title={"Login"}
      description={"Login to your account."}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-2">
            <LoginInputs form={form} />
          </CardContent>
          <CardFooter>
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default LoginForm;
