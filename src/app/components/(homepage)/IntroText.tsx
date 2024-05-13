"use client";
import React from "react";
import CustomButton from "../(shared)/CustomButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const IntroText = () => {
  return (
    <section className="space-y-8 text-center">
      <h1 className="text-5xl text-balance">
        MyDiaryAI - Your Personal Journal Companion
      </h1>
      <p className="text-xl text-balance">
        MyDiaryAI helps users organize their thoughts, track their emotions, and
        gain insights through AI-powered analysis
      </p>
      <Link href={"/authentication?login"}>
        <Button className="mt-4">Get started</Button>
      </Link>
    </section>
  );
};

export default IntroText;
