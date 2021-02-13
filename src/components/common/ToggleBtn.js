import React, { useEffect, useState } from 'react';
import {useMode} from '../../lib/useMode';

const ToggleBtn = () => {
    const [theme, toggleTheme, componentMounted] = useMode();
    useEffect(() => {
        console.log(theme);
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
        <div className="toggle-btn-wrap"onClick={onClick}>
            <div className="toggle-btn">
            </div>
        </div>
    )
}

export default ToggleBtn;