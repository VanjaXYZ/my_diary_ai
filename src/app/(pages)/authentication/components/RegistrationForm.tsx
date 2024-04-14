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
import React from "react";

const RegistrationForm = () => {
  return (
    <TabsContent value="register">
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
          <Button onClick={() => console.log("Registration complete!")}>
            Register
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default RegistrationForm;
