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
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import React from "react";

const LoginForm = () => {
  const router = useRouter();
  return (
    <TabsContent value="login">
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
          <Button onClick={() => router.push("/diary")}>Login</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default LoginForm;
