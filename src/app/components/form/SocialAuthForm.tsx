"use client";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { toast } from "sonner";

export default function SocialAuthForm() {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      console.error(error);
      toast(
        error instanceof Error
          ? error.message
          : "An error occurred during sign-in"
      );
    }
  };
  return (
    <div className="flex gap-2 items-center mt-10">
      <Button
        onClick={() => handleSignIn("github")}
        className="rounded flex-1 bg-slate-800 text-white cursor-pointer hover:bg-slate-800/80"
      >
        <Image
          src="/icons/github.svg"
          alt="github icon"
          width={20}
          height={20}
          className="object-contain inverted-colors:bg-white"
        />
        <span>Sign in with GitHub</span>
      </Button>
      <Button
        onClick={() => handleSignIn("google")}
        className="rounded flex-1 bg-slate-800 text-white cursor-pointer hover:bg-slate-800/80"
      >
        <Image
          src="/icons/google.svg"
          alt="github icon"
          width={20}
          height={20}
          className="object-contain inverted-colors:bg-white"
        />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
}
