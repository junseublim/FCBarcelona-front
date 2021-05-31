import React, { useEffect, useState, useContext } from 'react';
import ThemeContext from '../../contexts/theme';
const ToggleBtn = () => {
    const { state, actions } = useContext(ThemeContext);
    const theme = state.theme;
    const toggleTheme = actions.toggleTheme;
    useEffect(() => {
        const app = document.querySelector("html");
        if (app.classList.contains('dark')) {
            const toggleWrap = document.querySelector(".toggle-btn-wrap");
            const toggleBtn = document.querySelector(".toggle-btn");
            toggleWrap.classList.add('dark');
            toggleBtn.classList.add('dark');
        }
    });
    const onClick = () => {
        toggleTheme();
    }
    return (
        <div className="toggle-btn-wrap" onClick={onClick}>
            <div className="toggle-btn">
            </div>
        </div>
    )
}

export default ToggleBtn;