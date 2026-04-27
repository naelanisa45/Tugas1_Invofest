import React from "react";

interface ButtonProps {
  title?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  type = "button",
  className,
  children,
}) => {
  return (
    <button type={type} className={className}>
      {children || title}
    </button>
  );
};

export default Button;