import React, { useEffect } from 'react';

const ToggleBtn = () => {
    const black = "#1D1B1E";
    const red = "#A70042";
    let darkMode = false;

    useEffect(() => {
        console.log('useEffect!');
        const isDarkMode = window.matchMedia('prefers-color-scheme: dark');
        const app = document.querySelector("html");
        if (isDarkMode) {
            onClick();
            app.classList.add('dark');
        }
    }, []);

    const onClick = () => {
        const toggleWrap = document.querySelector(".toggle-btn-wrap");
        const toggleBtn = document.querySelector(".toggle-btn");
        const app = document.querySelector("html");
        if (darkMode) {
            toggleBtn.style.backgroundColor = "white";
            toggleWrap.style.backgroundColor = "#A70042";
            toggleBtn.style.transform = "translateX(0rem)"
            app.classList.remove('dark');
            darkMode = false;
        }
        else {
            toggleBtn.style.backgroundColor = "#1D1B1E";
            toggleWrap.style.backgroundColor = "#d4af37";
            toggleBtn.style.transform = "translateX(2.4rem)"
            app.classList.add('dark');
            darkMode = true;
        }
        
    }
    return (
        <div className="toggle-btn-wrap"onClick={onClick}>
            <div className="toggle-btn">
            </div>
        </div>
    )
}

export default ToggleBtn;