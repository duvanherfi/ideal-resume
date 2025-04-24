import LanguageSelector from "./LanguageSelector";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className="lg:px-12 flex justify-between items-center xl:fixed top-0 z-50 backdrop-blur-xl w-full py-2 px-3 bg-secondary-300/30 text-secondary-900 dark:bg-secondary-950/30 dark:text-secondary-100 border-b border-secondary-900/20 dark:border-secondary-500/20">
      <h1 className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-100 font-sans">IdealResume</h1>
      <div className="space-x-4 flex items-center justify-center">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
