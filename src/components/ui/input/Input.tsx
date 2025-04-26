import React, { useState, useRef, useEffect } from "react";

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
  suggestions?: string[];  // Lista de sugerencias opcional
  onSuggestionClick?: (suggestion: string) => void; // Función opcional para manejar el clic en una sugerencia
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
  suggestions = [],
  onSuggestionClick,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(e.relatedTarget as Node)) {
      setIsFocused(false);
      setTimeout(() => {
        setShowSuggestions(false);
      }, 200);
    }
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSuggestions) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showSuggestions]);

  return (
    <div className={`mb-4 ${className} w-full relative`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-secondary-700 dark:text-white mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="transition-all duration-200 w-full px-3 py-2 dark:text-white bg-white/70 dark:bg-black/50 border dark:border-primary-500/50 border-primary-500/50 rounded-lg shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />

      {suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          className={`absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-primary-500/50 dark:border-primary-500/50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${showSuggestions
            ? "max-h-60 opacity-100 scale-y-100 origin-top"
            : "max-h-0 opacity-0 scale-y-0 origin-top"
            }`}
          tabIndex={-1}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-3 py-2 text-sm cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-150"
              onMouseDown={(e) => {
                e.preventDefault(); // Prevenir el blur antes del clic
                handleSuggestionClick(suggestion);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;