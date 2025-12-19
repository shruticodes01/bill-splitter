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
      className={`w-full h-screen max-md:max-w-md max-md:max-h-[933px] md:max-h-[1024px] md:max-w-152 lg:max-w-227 mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
