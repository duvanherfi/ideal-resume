import AppProvider from "./context/app/AppProvider";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import "./styles.css";

export default function App() {
  return (
    <AppProvider>
      <div className="bg-gradient-to-bl from-white/50 via-primary-200/50 to-white/50 dark:from-black dark:via-secondary-900 dark:to-black xl:overflow-hidden xl:max-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppProvider>
  );
}