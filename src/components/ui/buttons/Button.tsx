import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none";

  const variantStyles = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg",
    secondary: "bg-green-700 text-white dark:bg-green-900 dark:text-white  shadow-lg",
    outline:
      "bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
