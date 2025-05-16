import useI18N from "@hooks/app/useI18N";
import React, { useEffect, useRef, useState } from "react";
import InputSuggestions from "./InputSuggestions";

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    required = false,
    className = "",
    error,
    suggestions = [],
    onSuggestionClick,
    disabled,
    autofocus
  } = props;
  const { t } = useI18N();
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (onSuggestionClick) {
      onSuggestionClick(suggestion);
    } else {
      const event = {
        target: {
          name,
          value: suggestion
        }
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
    setShowSuggestions(false);
  };

  const handleSuggestionMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, suggestion: string) => {
    e.preventDefault();
    handleSuggestionClick(suggestion);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showSuggestions) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const inputBaseClassName = "transition-all duration-200 w-full px-3 py-2 rounded-lg shadow-sm backdrop-blur-sm";
  const inputFocusClassName = "focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 dark:focus:ring-accent-300 dark:focus:border-accent-300";
  const inputClassName = `bg-white/70 dark:bg-black/50 dark:text-white border border-accent-500/50 dark:border-accent-300/50 ${inputFocusClassName} ${inputBaseClassName}`;

  return (
    <div ref={containerRef} className={`mb-4 ${className} w-full relative`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-secondary-700 dark:text-white mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={t(placeholder)}
        required={required}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={inputClassName}
        disabled={disabled}
        autoFocus={autofocus}
      />
      <InputSuggestions
        suggestions={suggestions}
        showSuggestions={showSuggestions && isFocused}
        handleMouseDown={handleSuggestionMouseDown}
        ref={suggestionsRef}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;