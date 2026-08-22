"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

export interface ButtonProps
  extends HTMLMotionProps<"button"> {
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
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#00FF66] focus:ring-offset-2 focus:ring-offset-[#050505] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-[#00FF66] text-[#050505] hover:bg-[#00e65c]",
    secondary: "bg-[#151515] text-[#ededed] hover:bg-[#202020]",
    outline: "border border-[#333333] text-[#ededed] hover:bg-[#101010] hover:border-[#444444]",
    ghost: "text-[#a3a3a3] hover:text-[#ededed] hover:bg-[#101010]",
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
        <motion.span
          className="inline-block"
          whileHover={{ x: variant === "primary" ? 4 : 0, y: variant === "primary" ? -4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {Inner}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={combinedStyles}
      {...props}
    >
      {Inner}
    </motion.button>
  );
}
