import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

const Authentication = () => {
  return (
    <Tabs defaultValue="login" className="max-w-[400px] m-auto mt-20">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <LoginForm />
      <RegistrationForm />
    </Tabs>
  );
};

export default Authentication;
