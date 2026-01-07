"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "text-white bg-primary-500 hover:bg-primary-400 focus:ring-primary-500",
  secondary: "bg-secondary-200 hover:bg-secondary-100 focus:ring-secondary-100",
  outline:
    "border border-secondary-200 hover:bg-secondary-50 focus:ring-secondary-200",
};

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  isLink?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLink?: false;
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    isLink: true;
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = ({
  children,
  className,
  variant = "primary",
  isLink,
  ...rest
}: ButtonProps) => {
  const baseClasses =
    "inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const classes = cn(baseClasses, VARIANT_CLASSES[variant], className);

  if (isLink) {
    const { href, ...linkProps } = rest as ButtonAsLink;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
};

export default Button;
