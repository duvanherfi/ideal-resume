import useDarkMode from "@hooks/useDarkMode";
import Icons from "../../ui/icons/Icons";

const ThemeToggleButton = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-800 hover:bg-secondary-300 dark:hover:bg-secondary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? <Icons.Sun /> : <Icons.Moon />}
        </button>
    );
};

export default ThemeToggleButton;