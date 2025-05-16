import Footer from "src/layout/footer/Footer";
import Header from "src/layout/header/Header";
import Main from "src/layout/main/Main";
import "./output.css";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gradient-to-b lg:bg-gradient-to-tr from-primary-100/60 via-primary-200/50 to-white/50 dark:from-primary-950 dark:via-secondary-900 dark:to-secondary-950 xl:overflow-hidden xl:max-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;