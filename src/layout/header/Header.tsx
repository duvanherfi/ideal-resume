import LanguageSelector from "./actions/LanguageSelector";
import ThemeToggleButton from "./actions/ThemeToggleButton";

const Header: React.FC = () => {
  return (
    <header className="lg:px-12 flex justify-between items-center fixed top-0 z-50 backdrop-blur-xl w-full py-2 px-3 bg-white/50 text-secondary-900 dark:bg-black/50 dark:text-secondary-100 border-b border-secondary-900/20 dark:border-secondary-500/20">
      <h1 className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-100 font-sans">IdealResume</h1>
      <div className="space-x-4 flex items-center justify-center">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
