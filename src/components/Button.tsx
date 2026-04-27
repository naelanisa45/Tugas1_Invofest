import type React from "react";

interface ButtonProps {
  title?: string;
  variant?: "primary" | "outline"; // ✅
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;
}

//untuk membuat component di react 
export const Button: React.FC<ButtonProps> =({ 
    title, 
    type = "button",
    variant = "primary",
    className, 
    children,
}) => {
    const primary = "bg-red-900 p-4 text-white rounded-lg";
    const outline = "border border-red-900 text-red-900 px-4 py-2 rounded-lg";

    return (
        <button type={type} className={className}>
  {children || title}
</button>
    );
};

export default Button;