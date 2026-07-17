"use client";

import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
    {
      "bg-black text-white hover:bg-neutral-800":
        variant === "primary",

      "border border-black bg-white text-black hover:bg-black hover:text-white":
        variant === "secondary",

      "h-10 px-5 text-sm": size === "sm",
      "h-12 px-7 text-base": size === "md",
      "h-14 px-9 text-lg": size === "lg",
    },
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={classes}
    >
      {children}
    </button>
  );
}