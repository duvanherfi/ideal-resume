import React from "react";
import Text from "../text/Text";
import I18n from "@language/common/I18nKeys";

interface InputSuggestionsProps {
  suggestions?: string[];
  showSuggestions: boolean;
  handleMouseDown: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, suggestion: string) => void
  ref: React.RefObject<HTMLUListElement>;
}

const InputSuggestions = React.forwardRef<HTMLUListElement, Omit<InputSuggestionsProps, "ref">>((props, ref) => {
  const { suggestions = [], showSuggestions, handleMouseDown } = props;

  const listClassName = `flex flex-col absolute z-10 w-full bg-white/80 dark:bg-secondary-900/80 border border-accent-500/50 dark:border-accent-500/50 rounded-md shadow-lg overflow-y-auto scrollbar transition-all duration-300`;
  const listStatusClassName = showSuggestions ? "max-h-60 opacity-100 scale-y-100 origin-top" : "max-h-0 opacity-0 scale-y-0 origin-top";

  return (
    <>
      {suggestions.length > 0 && (
        <ul ref={ref} className={`${listClassName} ${listStatusClassName}`} tabIndex={-1}>
          <Text className="p-2 text-xs text-secondary-600 dark:text-secondary-400">{I18n.INPUT.SUGGESTIONS.TITLE}</Text>
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion + index}
              className="w-full text-left px-3 py-2 text-sm cursor-pointer hover:bg-accent-200/80 dark:hover:bg-accent-900/80 dark:text-secondary-100 transition-colors duration-150"
              onMouseDown={(e) => handleMouseDown(e, suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </ul>
      )}
    </>
  );
});

InputSuggestions.displayName = "InputSuggestions";

export default InputSuggestions;