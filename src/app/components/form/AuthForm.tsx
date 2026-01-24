"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  useForm,
  FieldValues,
  DefaultValues,
  SubmitHandler,
  Path,
  Resolver,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import ROUTES from "@/constants/route";

interface AuthFormProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

export default function AuthForm<T extends FieldValues>({
  formType,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      schema as unknown as z.ZodType<any, any, any>,
    ) as unknown as Resolver<T>,
    defaultValues: defaultValues as DefaultValues<T>,
  });
  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";
  const handleSubmit: SubmitHandler<T> = async () => {};
  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="w-full flex flex-col gap-2.5">
                <FormLabel>
                  {field.name === "email" ? "Email Address" : field.name}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className="px-4 py-2 rounded"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={form.formState.isSubmitting}
          className="px-4 py-3 w-full rounded my-5 text-white primary_gradient cursor-pointer transition-all duration-150"
        >
          {form.formState.isSubmitting
            ? buttonText === "Sign In"
              ? "signing in"
              : "signing up"
            : buttonText}
        </Button>
        {formType === "SIGN_IN" ? (
          <p>
            Don&apos;t have an account?{" "}
            <Link href={ROUTES.SIGN_UP} className="text-primary-400">
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link href={ROUTES.SIGN_IN} className="text-primary-400">
              Sign In
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
}
