
function Toggle({ darkMode, setDarkMode }) {
    return (
        <div className='dark-mode-toggle'>
            <input
            className="dm-input"
            id='switch'
            type="checkbox"
            role='switch'
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            />
            <label className='dm-label' htmlFor="switch">Toggle</label>
            {/* <SunIcon className='is_checked h-5 w-5' />
            <MoonIcon className='is_unchecked h-5 w-5' /> */}
        </div>
    )
}

export default Toggle