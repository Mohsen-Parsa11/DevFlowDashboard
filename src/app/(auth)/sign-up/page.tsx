"use client";
import AuthForm from "@/app/components/form/AuthForm";
import { SignUpSchema } from "@/lib/Validations";

export default function SignUpPage() {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}
