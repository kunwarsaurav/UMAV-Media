"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:pointer-events-none rounded-md";

  const variants = {
    primary: "bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-sm hover:shadow-md",
    secondary: "bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0]",
    outline: "border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#CBD5E1]",
    ghost: "text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const Inner = (
    <span className="flex items-center gap-2">
      {children}
      {icon && (
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`${combinedStyles} group`}>
        {Inner}
      </Link>
    );
  }

  return (
    <button
      className={`${combinedStyles} group`}
      {...(props as any)}
    >
      {Inner}
    </button>
  );
}
