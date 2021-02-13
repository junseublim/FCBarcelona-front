import { useState, useEffect } from "react"


export const useMode = () => {
    const [theme, setTheme] = useState('light');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
        if (mode === 'dark') {
            const app = document.querySelector('html');
            const toggleWrap = document.querySelector(".toggle-btn-wrap");
            const toggleBtn = document.querySelector(".toggle-btn");
            toggleWrap.classList.add('dark');
            toggleBtn.classList.add('dark');
            app.classList.add('dark');
        }
        else {
            const app = document.querySelector('html');
            const toggleWrap = document.querySelector(".toggle-btn-wrap");
            const toggleBtn = document.querySelector(".toggle-btn");
            toggleWrap.classList.remove('dark');
            toggleBtn.classList.remove('dark');
            app.classList.remove('dark');
        }
        setTheme(mode);
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setMode('dark')
        }
        else {
            setMode('light')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        let isDark;
        if (localTheme) isDark = localTheme === 'dark' ? true : false;
        else isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDark) setMode('dark');
        setComponentMounted(true);
    }, []);
    return [theme, toggleTheme, componentMounted]
};