import type React from "react";

interface buttonProps{
    title: string; 
    type?: "submit"//title akan berubah-ubah tergantung dari fe nya
    variant: string;
    className?: string;
    children?: React.ReactNode;
}

//untuk membuat component di react 
export const Button: React.FC<buttonProps> =({ title, type, variant, className, children = "" }) => {
    const primary = "bg-red-900 p-4 text-white rounded-lg";
    const outline = "border border-red-900 text-red-900 px-4 py-2 rounded-lg";

    return (
        <button type={type} className={className}>
  {children || title}
</button>
    );
};

export default Button;