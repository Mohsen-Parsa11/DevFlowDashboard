"use client";
import AuthForm from "@/app/components/form/AuthForm";
import { SignInSchema } from "@/lib/Validations";

export default function SignInPage() {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}
