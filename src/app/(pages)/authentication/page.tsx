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
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Authentication = () => {
  return (
    <Tabs defaultValue="account" className="max-w-[400px] m-auto mt-20">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Username</Label>
              <Input id="name" defaultValue="Daydreamer" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input id="username" defaultValue="********" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Register your new account here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="newUsername">Username</Label>
              <Input id="newUsername" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="newPassword">Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="repeatNewPassword">Confirm Password</Label>
              <Input id="repeatNewPassword" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Register</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Authentication;
