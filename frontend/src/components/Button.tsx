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
    "inline-flex items-center justify-center font-semibold tracking-wider text-xs uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none rounded-xl";

  const variants = {
    primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] hover:brightness-110",
    secondary: "bg-brand-accent/10 border border-brand-accent/20 text-brand-accent hover:bg-brand-accent/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]",
    outline: "border border-brand-primary/35 text-text-primary hover:bg-brand-primary/10 hover:border-brand-primary/60 backdrop-blur-sm",
    ghost: "text-text-secondary hover:text-brand-primary hover:bg-brand-primary/5",
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
