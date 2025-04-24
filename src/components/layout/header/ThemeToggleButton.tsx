import useDarkMode from "../../../hooks/useDarkMode";
import Icons from "../../ui/icons/Icons";

const ThemeToggleButton = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    
    return (
        <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 h-12 w-12 flex items-center justify-center rounded-full bg-accent-800 text-secondary-100 dark:bg-primary-900 dark:text-yellow-300 hover:bg-accent-900 dark:hover:bg-secondary-950 transition-colors focus:outline-none"
        >
            {darkMode ? <Icons.Sun /> : <Icons.Moon />}
        </button>
    );
};

export default ThemeToggleButton;