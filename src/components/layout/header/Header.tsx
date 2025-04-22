import LanguageSelector from "./LanguageSelector";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className="lg:px-12 flex justify-between items-center fixed top-0 z-50 backdrop-blur-xl w-full py-2 px-3 bg-accent-300/30 text-accent-900 dark:bg-accent-600/30 dark:text-secondary-100 shadow-lg border-b border-secondary-900/20 dark:border-secondary-500/20">
      <h1 className="text-xl md:text-2xl font-bold text-black/80 dark:text-primary-100">IdealResume</h1>
      <div className="space-x-4 flex items-center justify-center">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
