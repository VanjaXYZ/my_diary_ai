"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const FormSubmitButton = () => {
  const router = useRouter();
  return (
    <div>
      <Button type="submit" onClick={() => router.push("/diary")}>
        Login
      </Button>
    </div>
  );
};

export default FormSubmitButton;
