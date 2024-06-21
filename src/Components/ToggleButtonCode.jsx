import React, { useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';

function ToggleButtonCode() {

    const [isDark, setIsDark] = useState(true)

    function ToggleFunction() {
        setIsDark(isDark => !isDark)
        var element = document.body;
        element.classList.toggle("light-mode");
    }
    return (
        <div className='toggle-button'>
            <button onClick={ToggleFunction}> {isDark ? <DarkModeIcon /> : <LightModeSharpIcon />} </button>
        </div>
    )
}

export default ToggleButtonCode