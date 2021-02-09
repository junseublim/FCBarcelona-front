import React from 'react';

const ToggleBtn = () => {
    const black = "#1D1B1E";
    const red = "#A70042";
    let darkMode = false;

    const onClick = () => {
        const toggleWrap = document.querySelector(".toggle-btn-wrap");
        const toggleBtn = document.querySelector(".toggle-btn");
        if (darkMode) {
            toggleBtn.style.backgroundColor = "white";
            toggleWrap.style.backgroundColor = "#A70042";
            toggleBtn.style.transform = "translateX(0rem)"
            darkMode = false;
        }
        else {
            toggleBtn.style.backgroundColor = "#1D1B1E";
            toggleWrap.style.backgroundColor = "#d4af37";
            toggleBtn.style.transform = "translateX(2.4rem)"
            darkMode = true;
        }
        
    }
    return (
        <div className="toggle-btn-wrap">
            <div className="toggle-btn" onClick={onClick}>
            </div>
        </div>
    )
}

export default ToggleBtn;