import AppProvider from "./AppProvider";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import "./styles.css";

export default function App() {
  return (
    <AppProvider>
      <div className="scrollbar bg-gradient-to-bl from-white via-secondary-400/50 to-white dark:from-black dark:via-secondary-900 dark:to-black overflow-x-hidden max-h-screen  scrollbar-thin scrollbar-thumb-primary-200 dark:scrollbar-thumb-primary-800">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppProvider>
  );
}