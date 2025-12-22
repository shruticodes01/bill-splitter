import React from "react";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`w-full h-screen max-md:max-w-md max-md:max-h-233.25 md:max-h-256 md:max-w-152 lg:max-w-227 mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
