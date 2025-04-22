import { useState, useEffect } from "react";

const useDarkMode = () => {
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