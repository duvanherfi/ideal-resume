import LanguageSelector from "./actions/LanguageSelector";
import ThemeToggleButton from "./actions/ThemeToggleButton";

const Header: React.FC = () => {
  return (
    <header className="lg:px-12 flex justify-between items-center fixed top-0 z-50 backdrop-blur-xl w-full py-2 px-3 bg-white/50 text-secondary-900 dark:bg-black/50 dark:text-secondary-100 border-b border-secondary-900/20 dark:border-secondary-500/20 xl:h-16">
      <div className="flex group">
        <h1 className="text-xl md:text-2xl font-bold group-hover:tracking-tight  transition-all duration-300 text-primary-900 dark:text-primary-100 font-stoke">Ideal</h1>
        <h1 className="text-xl md:text-2xl font-bold group-hover:tracking-wider transition-all duration-300 text-primary-900 dark:text-primary-100 font-stoke">Resume</h1>
      </div>
      <div className="space-x-4 flex items-center justify-center">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
