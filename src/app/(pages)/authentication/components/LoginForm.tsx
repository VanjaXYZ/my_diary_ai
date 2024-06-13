"use client";
import { createTokenCoookie } from "@/app/actions";
import { loginSchema } from "@/app/schemas/validations";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Config } from "../../../../../config";
import { loginTypeZod } from "../../../types/types";
import FormWrapper from "./FormWrapper";
import LoginInputs from "./LoginInputs";

const LoginForm: React.FC = () => {
  const form = useForm<typeof loginTypeZod>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const response = await axios.post(`${Config.baseURL}/login`, {
        username: values.username,
        password: values.password,
      });
      if (response.status === 201) {
        createTokenCoookie(response?.data);
        toast({
          description: response?.data?.message,
        });
        router.replace("/diary");
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
