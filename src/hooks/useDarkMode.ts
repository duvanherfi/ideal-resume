import { useState, useEffect } from "react";

type UseDarkModeType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const useDarkMode = (): UseDarkModeType => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return { darkMode, toggleDarkMode };
}

export default useDarkMode;