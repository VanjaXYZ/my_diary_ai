"use client";
import { loginSchema } from "@/app/schemas/validations";
import { LoginFormValidation } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginTypeZod } from "../../../types/types";
import FormWrapper from "./FormWrapper";
import LoginInputs from "./LoginInputs";
import { Config } from "../../../../../config";

const LoginForm: React.FC = () => {
  const form = useForm<typeof loginTypeZod>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // try {
    // const response = await fetch(`${Config.baseURL}/user`)
    // } catch (error) {
    //   console.error();
    // }
    // console.log(values);
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
