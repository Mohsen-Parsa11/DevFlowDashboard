import z from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please provide a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password can not exceed 100 character." }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "User name must be at least 3 characters." })
    .max(30, { message: "User name can not exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+s/, {
      message: "User name can only contain letters, numbers and underscores.",
    }),
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name can not exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+s/, {
      message: "Name can only contain letters and spaces.",
    }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please provide a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password can not exceed 100 character." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number.",
    })
    .regex(/[a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});
