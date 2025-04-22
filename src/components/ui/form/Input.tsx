import React from "react";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  className = "",
  error,
}) => {
  return (
    <div className={`mb-4 ${className} w-full`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-secondary-700 dark:text-white mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="transition-all duration-200 w-full px-3 py-2 dark:text-white bg-white/50 dark:bg-black/50 border dark:border-accent-500/50 border-accent-500/50 rounded-lg shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
