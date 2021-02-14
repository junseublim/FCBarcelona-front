import React, {createContext, useState, useEffect} from 'react';

const ThemeContext = createContext({
    state: {theme: 'light'},
    actions: {
        toggleTheme: () => {}
    } 
});

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        let isDark;
        if (localTheme) isDark = localTheme === 'dark' ? true : false;
        else isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDark) setMode('dark');
        //setComponentMounted(true);
    }, []);

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
        console.log("hello")
        if (theme === 'light') {
            setMode('dark')
        }
        else {
            setMode('light')
        }
    }

    const value = {
        state: {theme},
        actions: {toggleTheme}
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

const {Consumer: ThemeConsumer} = ThemeContext;
export {ThemeProvider, ThemeConsumer};

export default ThemeContext;