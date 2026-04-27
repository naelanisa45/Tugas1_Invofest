import React from "react";

interface ButtonProps {
  title?: string;
  variant?: "primary" | "outline";
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  type = "button",
  className = "",
  children,
}) => {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold transition";

  const variantStyle =
    variant === "outline"
      ? "border border-red-900 text-red-900"
      : "bg-red-900 text-white";

  return (
    <button type={type} className={`${baseStyle} ${variantStyle} ${className}`}>
      {children || title}
    </button>
  );
};

export default Button;