"use client";
import { Button } from "@/components/ui/button";
import React from "react";

type ButtonProps =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type ButtonType = "submit" | "reset" | "button";

const CustomButton = ({
  children,
  buttonVariant,
  type,
  onClickFn,
}: {
  children: React.ReactNode;
  buttonVariant: ButtonProps;
  type: ButtonType;
  onClickFn?: () => void;
}) => {
  return (
    <Button variant={buttonVariant} type={type} onClick={onClickFn}>
      {children}
    </Button>
  );
};

export default CustomButton;
