import Footer from "@components/layout/footer/Footer";
import Header from "@components/layout/header/Header";
import Main from "@components/layout/main/Main";
import "./output.css";

const App = () => {
  return (
    <div className="font-sans bg-gradient-to-b lg:bg-gradient-to-br from-accent-100/60 via-accent-200/50 to-white/50 dark:from-accent-950 dark:via-secondary-900 dark:to-secondary-800 xl:overflow-hidden xl:max-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;