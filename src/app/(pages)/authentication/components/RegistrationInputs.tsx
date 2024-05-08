import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

const RegistrationInputs = ({ form }) => {
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
