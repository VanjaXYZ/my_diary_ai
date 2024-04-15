import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Link from "next/link";

const Authentication = () => {
  return (
    <Tabs defaultValue="login" className="max-w-[400px] m-auto mt-20">
      <TabsList className="grid w-full grid-cols-2">
        <Link href="/authentication?login">
          <TabsTrigger className="w-full" value="login">
            Login
          </TabsTrigger>
        </Link>
        <Link href="/authentication?register">
          <TabsTrigger className="w-full" value="register">
            Register
          </TabsTrigger>
        </Link>
      </TabsList>
      <LoginForm />
      <RegistrationForm />
    </Tabs>
  );
};

export default Authentication;
