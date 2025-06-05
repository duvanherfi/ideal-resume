import useDarkMode from "@hooks/app/useDarkMode";
import Icons from "@icons/Icons";

const ThemeToggleButton: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode} className="p-2 bg-white hover:bg-white/50 hover:text-sky-500 text-secondary-700 focus:ring-secondary-300 dark:bg-black/80 dark:hover:bg-black/50 dark:text-secondary-300 dark:hover:text-yellow-200 rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? <Icons.Sun /> : <Icons.Moon />}
        </button>
    );
};

export default ThemeToggleButton;