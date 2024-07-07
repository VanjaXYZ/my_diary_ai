import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerTypeZod } from "../../../types/types";

const RegistrationInputs = ({ form }: { form: registerTypeZod | any }) => {
  return (
    <>
      {/* EMAIL */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="ai@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* USERNAME */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Daydreamer" {...field} />
            </FormControl>
            <FormDescription>Minimum 4 characters.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* PASSWORD */}
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="********" {...field} />
            </FormControl>
            <FormDescription>Minimum 8 characters.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      {/*CONFIRM PASSWORD */}
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="********" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default RegistrationInputs;
