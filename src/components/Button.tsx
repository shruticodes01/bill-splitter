import React from "react";

type Variant = "tip" | "custom" | "reset";

interface ButtonProps {
  variant?: Variant;
  label?: string;
  className?: string;
  value?: number;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({
  variant = "tip",
  label,
  className,
  value,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center cursor-pointer rounded-[.3125rem] font-semibold";
  const variantClasses = {
    tip: "px-4 py-2 text-lg leading-lg hover:bg-green-400 hover:text-green-900",
    custom: "bg-grey-50 text-grey-500 text-lg leading-lg",
    reset: "px-8 py-2 bg-green-400 text-green-900 text-md leading-md",
  };
  return (
    <button
      className={`${base} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      value={value}
      {...props}
    >
      {children}
      {label}
    </button>
  );
}
