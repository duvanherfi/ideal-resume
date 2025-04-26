import AppProvider from "./context/app/AppProvider";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import "./styles.css";

export default function App() {
  return (
    <AppProvider>
      <div className="font-sans bg-gradient-to-b lg:bg-gradient-to-br from-accent-300/40 via-secondary-200/50 to-white/50 dark:from-accent-950 dark:via-secondary-900 dark:to-black xl:overflow-hidden xl:max-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppProvider>
  );
}