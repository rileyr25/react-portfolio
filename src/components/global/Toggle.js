import React from 'react'

function Toggle({ darkMode, setDarkMode }) {
    return (
        <div className='dark-mode-toggle'>
            <input
            className="dm-input"
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            />
        </div>
    )
}

export default Toggle